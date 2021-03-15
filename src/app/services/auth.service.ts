import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../models/users.model';
import { MessageService } from './message.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import firebase from 'firebase/app';
// import 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  currentBehaviorUser = new BehaviorSubject(null);
  displayName;
  authState$ = this.afAuth.authState;

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
  }


  /* Email User Login */

  SignIn(credentials) {
    return this.afAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        this.afs.doc<User>(`users/${data.user.uid}`).update({
          uid: data.user.uid,
          email: data.user.email,
          emailVerified: data.user.emailVerified,
          lastUpdatedAt: firebase.firestore.Timestamp
        });
        this.modalController.dismiss().then(() => {
          this.messageService.loggedInToast(data);
        });
      })
      .catch((error) => {
        this.messageService.authErrorAlert(error);
      });
  }

  /* New User Email Signup */
  SignUp(credentials) {
    this.displayName = credentials.displayName;
    this.afAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        this.sendVerificationMail();
        this.afs.doc<User>(`users/${data.user.uid}`).set(
          {
            uid: data.user.uid,
            displayName: credentials.displayName,
            email: data.user.email,
            role: ['USER'],
            permissions: ['delete-ticket'],
            createdAt: firebase.firestore.Timestamp
          },
          { merge: true }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          this.messageService.errorAlert('The password is too weak.');
        }
        this.messageService.errorAlert(errorMessage);
      });
  }

  /* Send email verfificaiton when new user sign up */
  sendVerificationMail() {
    const actionCodeSettings = {
      url: 'https://expert-fitness-midland-tx.firebaseapp.com/vefified-email',
      handleCodeInApp: false
    };
    firebase
      .auth()
      .currentUser.sendEmailVerification(actionCodeSettings)
      .then(() => {
        this.messageService.registerSuccessAlert(this.displayName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code) {
          this.messageService.errorAlert(errorCode);
        }
        this.messageService.errorAlert(errorMessage);
      });
  }

   /* Auth providers */
  AuthLogin(provider) {
    this.afAuth
      .signInWithRedirect(provider)
      .then(() => {
        this.afAuth.getRedirectResult().then((result) => {
          this.modalController.dismiss();
          this.messageService.loggedInToast(result.user.displayName);
          this.afs.doc<User>(`users/${result.user.uid}`).update({
            uid: result.user.uid,
            photoURL: result.user.photoURL,
            email: result.user.email,
            emailVerified: result.user.emailVerified
          });
        });
      })
      .catch((error) => {
        this.modalController.dismiss();
        this.messageService.authErrorAlert(error.message);
      });
  }

   /* Sign in with 3rd party Oauth */
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  TwitterAuth() {
    return this.AuthLogin(new firebase.auth.TwitterAuthProvider());
  }
  // MicrosoftAuth() {
  //   this.AuthLogin(new fire.default.auth.OAuthProvider()).catch((error) => {
  //     this.messageService.errorAlert(error.message);
  //   });
  // }

  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

   /* Password Reset */
  passReset(email) {
    this.afAuth.sendPasswordResetEmail(email).catch((error) => {
      this.messageService.errorAlert(error.message);
    });
  }

   /* Sign-out */
  signOut() {
    return this.afAuth
      .signOut()
      .then(() => {
        this.messageService.signOutToast();
        this.router.navigate(['/home']);
      })
      .catch((error) => this.messageService.errorAlert(JSON.stringify(error.message)));
  }

  /* Permissions */

  canRead(user: User): boolean {
    return this.checkAuthorization(user);
  }

   /* determines if user is a member */
  private checkAuthorization(user: User): boolean {
    if (user && user.role.includes('PUBLIC' || 'CUSTOMER' || 'EMPLOYEE' || 'ADMIN')) {
      return true;
    } else {
      return false;
    }
  }

  hasPermissions(permissions: string[]): Observable<boolean> {
    for (const perm of permissions) {
      return this.user.pipe(
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
