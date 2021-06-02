import 'firebase/auth';

import firebase from 'firebase/app';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { User } from '../models/users.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;
  userId;
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

  /* New User Email Signup */
  SignUp(displayName: string, email: string, password: string) {
    this.displayName = displayName;
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: firebase.auth.UserCredential) => {
        this.modalController.dismiss();
        this.router.navigateByUrl('/home');
        this.messageService.registerSuccessAlert(this.displayName);
        this.sendVerificationMail();
        this.afs.doc<User>(`users/${userCredential.user.uid}`).set({
          uid: userCredential.user.uid,
          displayName: this.displayName,
          email: userCredential.user.email,
          role: ['USER'],
          permissions: ['delete-ticket'],
          photoURL: userCredential.user.photoURL,
          phoneNumber: '',
          createdAt: userCredential.user.metadata.creationTime,
          providerId: userCredential.additionalUserInfo.providerId,
          signInMethod: userCredential.credential.signInMethod,
          emailVerified: userCredential.user.emailVerified
        });
      })
      .catch((error) => this.messageService.errorAlert(error));
  }

  /* Email User Login */
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.modalController.dismiss();
        this.router.navigateByUrl('/home');
        this.messageService.loggedInToast(userCredential.user.displayName);
        this.afs.doc<User>(`users/${userCredential.user.uid}`).update({
          uid: userCredential.user.uid,
          displayName: this.displayName,
          email: userCredential.user.email,
          photoURL: userCredential.user.photoURL,
          phoneNumber: '',
          lastUpdatedAt: userCredential.user.metadata.lastSignInTime || '--',
          providerId: userCredential.additionalUserInfo.providerId || '',
          signInMethod: userCredential.credential.signInMethod,
          emailVerified: userCredential.user.emailVerified
        });
      })
      .catch((error) => this.messageService.errorAlert(error));
  }

  /* OAuth providers Signup*/
  AuthSignup(provider: firebase.auth.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((userCredential) => {
        this.modalController.dismiss();
        this.router.navigateByUrl('/home');
        if (userCredential.user.emailVerified) {
          this.messageService.registeredOauthToast(userCredential.user.displayName);
        }
        {
          this.sendVerificationMail();
          this.messageService.registerSuccessAlert(userCredential.user.displayName);
        }
        this.afs.doc<User>(`users/${userCredential.user.uid}`).set({
          uid: userCredential.user.uid,
          displayName: firebase.auth().currentUser.displayName,
          email: userCredential.user.email,
          role: ['USER'],
          permissions: ['delete-ticket'],
          photoURL: userCredential.user.photoURL,
          phoneNumber: '',
          createdAt: userCredential.user.metadata.creationTime,
          providerId: userCredential.additionalUserInfo.providerId,
          signInMethod: userCredential.credential.signInMethod,
          emailVerified: userCredential.user.emailVerified
        });
      })
      .catch((error) => this.messageService.errorAlert(error));
  }

  /* OAuth providers Login*/
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((userCredential) => {
        this.modalController.dismiss();
        this.router.navigateByUrl('/home');
        this.messageService.loggedInToast(userCredential.user.displayName);
        this.afs.doc<User>(`users/${userCredential.user.uid}`).update({
          uid: userCredential.user.uid,
          displayName: firebase.auth().currentUser.displayName,
          email: userCredential.user.email,
          photoURL: userCredential.user.photoURL,
          phoneNumber: '',
          lastUpdatedAt: userCredential.user.metadata.lastSignInTime,
          providerId: userCredential.additionalUserInfo.providerId,
          signInMethod: userCredential.credential.signInMethod,
          emailVerified: userCredential.user.emailVerified
        });
      })
      .catch((error) => this.messageService.errorAlert(error));
  }

  /* Sign in with 3rd party Oauth */
  GoogleAuthSignup() {
    return this.AuthSignup(new firebase.auth.GoogleAuthProvider());
  }

  GoogleAuthLogin() {
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

  /* Dismiss Modal and goto /home to be auto redirected if logged in */

  /* Send email verfificaiton when new user sign up */
  sendVerificationMail() {
    const actionCodeSettings = {
      url: 'https://apsistec.page.link/finish_task',
      handleCodeInApp: false
    };
    firebase
      .auth()
      .currentUser.sendEmailVerification(actionCodeSettings)
      .catch((error) => {
        this.messageService.authErrorAlert(error);
      });
  }

  /* Password Reset */
  passReset(email: string) {
    const actionCodeSettings = {
      url: 'https://apsistec.page.link/PassReset',
      handleCodeInApp: false
    };
    this.afAuth.sendPasswordResetEmail(email, actionCodeSettings).catch((error) => {
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

  /* determines current userRole */
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
