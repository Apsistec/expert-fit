import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { User } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: User;
  
  constructor(
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    private modalController: ModalController,
    private messageService: MessageService,
    private router: Router
  ) {}


  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    this.messageService.loggedInToast(signInSuccessData);
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    this.messageService.errorAlert(errorData);
  }

  uiShownCallback() {
    console.log('ui was shown');
  }

  logOut() {
    this.dismissModal();
    this.authService.SignOut();

  }

  goHome() {
    this.dismissModal();
    this.router.navigateByUrl('/home');
  }
}
