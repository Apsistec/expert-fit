import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { MessageService } from '../../services/message.service';
import { AboutAppComponent } from '../about-app/about-app.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TermsComponent } from '../terms/terms.component';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { PhoneAuthComponent } from '../phone-auth/phone-auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent implements OnInit, OnDestroy {
  destroy = new Subject<any>();
  // modal;
  modalID;
  userName;

  constructor(
    private modalController: ModalController,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy)).subscribe((params) => {
      this.modalID = params.id;
      if (this.modalID === 'about-app') {
        this.showModalAbout();
      } else if (this.modalID === 'privacy') {
        this.showModalPrivacy();
      } else if (this.modalID === 'terms') {
        this.showModalTerms();
      } else if (this.modalID === 'login') {
        this.showModalLogin();
      } else if (this.modalID === 'forgot-password') {
        this.showModalForgotPassword();
      } else if (this.modalID === 'signup') {
        this.showModalSignup();
      } else if (this.modalID === 'phone-auth') {
        this.showModalPhoneAuth();
      }
      {
        return false;
      }
    });
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'modal-css'
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error.message);
    });
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error.message);
    });
  }

  async showModalSignup() {
    const modal = await this.modalController.create({
      component: SignupComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error.message);
    });
  }

  async showModalForgotPassword() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: ForgotPasswordComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error.message);
    });
  }

  async showModalAbout() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AboutAppComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error.message);
    });
  }

  async showModalLogin() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error.message);
    });
  }

  async showModalPhoneAuth() {
    const modal = await this.modalController.create({
      component: PhoneAuthComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error.message);
    });
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.navController.back();
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
