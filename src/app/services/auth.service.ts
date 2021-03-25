import firebase from 'firebase/app';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { User } from '../models/users.model';
import { MessageService } from './message.service';

// import 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;
  currentBehaviorUser = new BehaviorSubject(null);
  displayName: any;
  authState$ = this.afAuth.authState;
  validUser = false;
  validCustomer = false;
  validEmployee = false;
  validAdmin = false;

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
  SignIn(credentials: { email: string; password: string }) {
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
        this.modalController.dismiss();
        this.messageService.authErrorAlert(error);
      });
  }

  /* New User Email Signup */
  SignUp(credentials) {
    this.displayName = credentials.displayName;
    const email = credentials.email;
    const password = credentials.password;
    this.afAuth
      .createUserWithEmailAndPassword(email as string, password as string)
      .then((data) => {
        this.sendVerificationMail();
        this.afs.doc<User>(`users/${data.user.uid}`).set(
          {
            uid: data.user.uid,
            displayName: this.displayName,
            email: data.user.email,
            role: ['USER'],
            permissions: ['delete-ticket'],
            method: data.credential.signInMethod,
            profile: data.additionalUserInfo.profile,
            createdAt: firebase.firestore.Timestamp
          },
          { merge: true }
        );
      })
      .catch((error) => {
        this.modalController.dismiss();
        this.messageService.authErrorAlert(error);
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
        this.messageService.authErrorAlert(error);
      });
  }

  /* Auth providers */
  AuthLogin(provider: firebase.auth.AuthProvider) {
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
        this.messageService.authErrorAlert(error);
      });
  }

  /* Sign in with 3rd party Oauth */
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  TwitterAuth() {
    return this.AuthLogin(new firebase.auth.TwitterAuthProvider());
  }

  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // MicrosoftAuth() {
  //   this.AuthLogin(new fire.default.auth.OAuthProvider()).catch((error) => {
  //     this.messageService.errorAlert(error);
  //   });
  // }

  /* Password Reset */
  passReset(email: string) {
    this.afAuth.sendPasswordResetEmail(email).catch((error) => {
      this.messageService.errorAlert(error);
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

  /* determines if user is a member */
  private checkAuthorization(user: User): boolean {
    if (user && user.role.includes('user' || 'customer' || 'employee' || 'admin')) {
      return (this.validUser = true);
    } else {
      return (this.validUser = false);
    }
  }
  private checkCustomerAuthorization(user: User): boolean {
    if (user && user.role.includes('customer' || 'employee' || 'admin')) {
      return (this.validCustomer = true);
    } else {
      return (this.validCustomer = false);
    }
  }
  private checkEmployeeAuthorization(user: User): boolean {
    if (user && user.role.includes('employee' || 'admin')) {
      return (this.validEmployee = true);
    } else {
      return (this.validEmployee = false);
    }
  }
  private checkAdminAuthorization(user: User): boolean {
    if (user && user.role.includes('admin')) {
      return (this.validAdmin = true);
    } else {
      return (this.validAdmin = false);
    }
  }
}
