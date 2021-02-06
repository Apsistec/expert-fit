
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {AuthProvider, Theme} from 'ngx-auth-firebaseui';
import { MessageService } from 'src/app/services/message.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
    title = 'ngx-auth-firebaseui';

    viewSourceOfNgxAuthFirebaseuiComponent: boolean;
    viewSourceOfNgxAuthFirebaseuiLoginComponent: boolean;
    viewSourceOfNgxAuthFirebaseuiRegisterComponent: boolean;
    viewSourceOfTheUserComponent: boolean;
    viewSourceOfTheProvidersComponentRow: boolean;
    viewSourceOfTheProvidersComponentColumn: boolean;
    viewSourceOfTheProvidersComponentThemes: boolean;

    snackbarSubscription: Subscription;

    error: boolean;
    public index: number;

    providers = AuthProvider;
    themes = Theme;

    constructor(
      public authService: AngularFireAuth,
      public router: Router,
      public messageService: MessageService,
      private modalController: ModalController,
      private snackbar: MatSnackBar
      ) {}

    get color(): string {
      return this.error ? 'warn' : 'primary';
    }

    printUser(event) {
      console.log('onSuccess event ->', event);
      this.error = false;
      this.index = 2;
    }

    printError(event) {
      console.error('onError event --> ', event);
      this.error = true;

      this.snackbar.open(event.message, 'OK', {duration: 5000});
    }

    ngOnDestroy(): void {
      if (this.snackbarSubscription) {
        this.snackbarSubscription.unsubscribe();
      }
    }

    onTabChange(event: MatTabChangeEvent) {
      console.log('on tab change: ', event);
    }


    onSignOut() {
      this.messageService.signOutToast();
    }

    onAccountDeleted() {
      this.messageService.presentToast('Account Delete successful!');
    }

    dismissModal() {
      this.modalController.dismiss().then(() => {
        this.router.navigateByUrl('/home');
      });
    }
  }
