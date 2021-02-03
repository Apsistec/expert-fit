import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/users.model';
import { MessageService } from './message.service';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Router } from '@angular/router';
// import { ModalController } from '@ionic/angular';
// import * as fire from 'firebase/app';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  role: string[];
  user: Observable<User>;
  currentBehaviorUser = new BehaviorSubject(null);
  // userType;
  // displayName;
  // authState$: any = this.afAuth.authState;
  // isLoggedIn;
  // notLoggedIn;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private messageService: MessageService,
    private router: Router
  ) // private modalController: ModalController
  {
    this.afAuth.user.pipe(
      map((user) => {
        if (user) {
          // tslint:disable-next-line: no-shadowed-variable
          this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          of(null);
        }
      })
    );
    console.log('user', this.user);

    // const usersList = document.getElementById('users');
  }

  // public firebaseAuthChangeListener(response) {
  //   if (response) {
  //     this.firebaseAuthChangeListener((res) => (this.isLoggedIn = res));
  //   }
  //   if (!!this.isLoggedIn) {
  //     console.log('rvalue: ', this.isLoggedIn);
  //   } else {
  //     // tslint:disable-next-line: no-unused-expression
  //     this.notLoggedIn;
  //   }
  // }

  // SignIn(credentials) {
  //   return this.afAuth
  //     .signInWithEmailAndPassword(credentials.email, credentials.password)
  //     .then((data) => {
  //       this.afs.doc<User>(`users/${data.user.uid}`).update({
  //         uid: data.user.uid,
  //         photoURL: data.user.photoURL,
  //         email: data.user.email,
  //         emailVerified: data.user.emailVerified,
  //         lastUpdatedAt: fire.default.firestore.FieldValue.serverTimestamp()
  //       });
  //       this.modalController.dismiss().then(() => {
  //         this.messageService.loggedInToast(data);
  //       });
  //     })
  //     .catch((error) => {
  //       this.messageService.authErrorAlert(error);
  //     });
  // }

  // SignUp(credentials) {
  //   return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password).then((data) => {
  //     this.afs
  //       .doc<User>(`users/${data.user.uid}`)
  //       .set(
  //         {
  //           uid: data.user.uid,
  //           displayName: credentials.displayName,
  //           photoURL: data.user.photoURL,
  //           email: data.user.email,
  //           userType: 'USER',
  //           permissions: ['delete-ticket'],
  //           emailVerified: data.user.emailVerified,
  //           createdAt: fire.default.firestore.FieldValue.serverTimestamp()
  //         },
  //         { merge: true }
  //       )
  //       .then(() => {
  //         this.modalController
  //           .dismiss()
  //           .then(() => {
  //             this.sendVerificationMail();
  //           })
  //           .catch((error) => {
  //             this.messageService.authErrorAlert(error);
  //           });
  //       });
  //   });
  // }

  // // Auth providers
  // AuthLogin(provider) {
  //   return this.afAuth.signInWithRedirect(provider).then(() => {
  //     return this.afAuth.getRedirectResult().then((data) => {
  //       this.afs
  //         .doc<User>(`users/${data.user.uid}`)
  //         .update({
  //           uid: data.user.uid,
  //           photoURL: data.user.photoURL,
  //           email: data.user.email,
  //           emailVerified: data.user.emailVerified,
  //           lastUpdatedAt: fire.default.firestore.FieldValue.serverTimestamp()
  //         })
  //         .then(() => {
  //           this.modalController
  //             .dismiss()
  //             .then(() => {
  //               this.messageService.loggedInToast(data);
  //             })
  //             .catch((err) => {
  //               this.messageService.authErrorAlert(err);
  //             });
  //         });
  //     });
  //   });
  // }

  // // Sign in with 3rd party Oauth
  // GoogleAuth() {
  //   this.AuthLogin(new fire.default.auth.GoogleAuthProvider()).catch((error) => {
  //     this.messageService.errorAlert(error);
  //   });
  // }

  // TwitterAuth() {
  //   this.AuthLogin(new fire.default.auth.TwitterAuthProvider()).catch((error) => {
  //     this.messageService.errorAlert(error);
  //   });
  // }
  // // MicrosoftAuth() {
  // //   this.AuthLogin(new fire.default.auth.OAuthProvider()).catch((error) => {
  // //     this.messageService.errorAlert(error);
  // //   });
  // // }

  // FacebookAuth() {
  //   this.AuthLogin(new fire.default.auth.FacebookAuthProvider()).catch((error) => {
  //     this.messageService.errorAlert(error);
  //   });
  // }

  // /* Send email verfificaiton when new user sign up */
  // sendVerificationMail() {
  //   const actionCodeSettings = {
  //     url: 'https://expert-fitness-midland-tx.firebaseapp.com/vefified-email',
  //     handleCodeInApp: true
  //   };
  //   fire.default
  //     .auth()
  //     .currentUser.sendEmailVerification(actionCodeSettings)
  //     .then(() => {
  //       this.messageService.registerSuccessAlert().then(() => {
  //         this.SignOut();
  //       });
  //     })
  //     .catch((error) => {
  //       this.messageService.errorAlert(error);
  //     });
  // }

  // // Recover password
  // ForgotPassword(passwordResetEmail) {
  //   return this.afAuth
  //     .sendPasswordResetEmail(passwordResetEmail)
  //     .then(() => this.messageService.resetPasswordAlert().catch((error) => this.messageService.errorAlert(error)));
  // }

  // Sign-out
  signOut() {
    return this.afAuth
      .signOut()
      .then(() => {
        this.messageService
          .signOutToast()
          .catch((err) => this.messageService.errorAlert(JSON.stringify(err)))
          .then(() => this.router.navigate(['/home']));
      })
      .catch((err) => this.messageService.errorAlert(JSON.stringify(err)));
  }

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
