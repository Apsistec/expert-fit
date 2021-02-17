import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../models/users.model';
import { MessageService } from './message.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as fire from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  role: string[];
  user: Observable<User>;
  userData;
  currentBehaviorUser = new BehaviorSubject(null);
  userType;
  displayName;
  authState$ = this.afAuth.authState;
  loggedInState: boolean;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private messageService: MessageService,
    private router: Router,
    private modalController: ModalController
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    console.log('userService: ', this.user);
  }

  SignIn(credentials) {
    return this.afAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        this.afs.doc<User>(`users/${data.user.uid}`).update({
          uid: data.user.uid,
          email: data.user.email,
          emailVerified: data.user.emailVerified,
          lastUpdatedAt: fire.default.firestore.FieldValue.serverTimestamp()
        });
        localStorage.setItem('user', JSON.stringify(data.user));

        this.modalController.dismiss().then(() => {
          this.messageService.loggedInToast(data);
        });
      })
      .catch((error) => {
        this.messageService.authErrorAlert(error);
      });
  }

  SignUp(credentials) {
    return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password).then((data) => {
      this.afs.doc<User>(`users/${data.user.uid}`).set(
        {
          uid: data.user.uid,
          displayName: credentials.displayName,
          email: data.user.email,
          role: ['USER'],
          permissions: ['delete-ticket'],
          createdAt: fire.default.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      );
      localStorage.setItem('user', JSON.stringify(data.user));
      this.modalController
        .dismiss()
        .then(() => {
          this.sendVerificationMail();
        })
        .catch((error) => {
          this.messageService.authErrorAlert(error);
        });
    });
  }

  // Auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithRedirect(provider).then(() => {
      return this.afAuth
        .getRedirectResult()
        .then((data) => {
          this.afs.doc<User>(`users/${data.user.uid}`).update({
            uid: data.user.uid,
            photoURL: data.user.photoURL,
            email: data.user.email,
            emailVerified: data.user.emailVerified,
            lastUpdatedAt: fire.default.firestore.FieldValue.serverTimestamp()
          });
          console.log('b4 message');
          this.messageService.loggedInToast(data.user.displayName);
          console.log('l8r message');
          localStorage.setItem('user', JSON.stringify(data.user));
          this.modalController.dismiss();
        })
        .catch((err) => {
          this.messageService.authErrorAlert(err);
        });
    });
  }

  // Sign in with 3rd party Oauth
  GoogleAuth() {
    return this.AuthLogin(new fire.default.auth.GoogleAuthProvider()).catch((error) => {
      this.messageService.errorAlert(error);
    });
  }

  TwitterAuth() {
   return this.AuthLogin(new fire.default.auth.TwitterAuthProvider()).catch((error) => {
      this.messageService.errorAlert(error);
    });
  }
  // MicrosoftAuth() {
  //   this.AuthLogin(new fire.default.auth.OAuthProvider()).catch((error) => {
  //     this.messageService.errorAlert(error);
  //   });
  // }

  FacebookAuth() {
    return this.AuthLogin(new fire.default.auth.FacebookAuthProvider()).catch((error) => {
      this.messageService.errorAlert(error);
    });
  }

  /* Send email verfificaiton when new user sign up */
  sendVerificationMail() {
    const actionCodeSettings = {
      url: 'https://expert-fitness-midland-tx.firebaseapp.com/vefified-email',
      handleCodeInApp: true
    };
    fire.default
      .auth()
      .currentUser.sendEmailVerification(actionCodeSettings)
      .then(() => {
        this.messageService.registerSuccessAlert().then(() => {
          this.signOut();
        });
      })
      .catch((error) => {
        this.messageService.errorAlert(error);
      });
  }

  // Password Reset
  passReset(email) {
    this.afAuth.sendPasswordResetEmail(email);
  }

  getUser() {
    const userData = localStorage.getItem('user');
    return JSON.parse(userData);
  }

  // Sign-out
  signOut() {
    return this.afAuth
      .signOut()
      .then(() => {
        localStorage.setItem('user', null);
        localStorage.removeItem('user');
        this.messageService
          .signOutToast()
          .catch((err) => this.messageService.errorAlert(JSON.stringify(err)))
          .then(() => this.router.navigate(['/home']));
      })
      .catch((err) => this.messageService.errorAlert(JSON.stringify(err)));
  }

  // Permissions

  canRead(user: User): boolean {
    return this.checkAuthorization(user);
  }

  // determines if user is a member
  private checkAuthorization(user: User): boolean {
    if (user && user.role.includes('PUBLIC' || 'CUSTOMER' || 'EMPLOYEE' || 'ADMIN')) {
      return true;
    } else {
      return false;
    }
  }

  hasPermissions(permissions: string[]): Observable<boolean> {
    for (const perm of permissions) {
      return this.user$.pipe(
        map((user) => {
          if (user && user.permissions.includes(perm)) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }
}
