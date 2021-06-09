import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { MessageService } from '../services/message.service';
import { AboutAppComponent } from '../shared/about-app/about-app.component';
import { ForgotPasswordComponent } from '../shared/forgot-password/forgot-password.component';
import { LoginComponent } from '../shared/login/login.component';
import { PhoneAuthComponent } from '../shared/phone-auth/phone-auth.component';
import { PrivacyComponent } from '../shared/privacy/privacy.component';
import { SignupComponent } from '../shared/signup/signup.component';
import { TermsComponent } from '../shared/terms/terms.component';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.page.html',
  styleUrls: ['./modal-view.page.scss']
})
export class ModalViewPage implements OnInit, OnDestroy {
  destroy = new Subject<any>();
  modalID;
  userName;

  constructor(
    private modalController: ModalController,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
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
      return this.messageService.errorAlert(error);
    });
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error);
    });
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error);
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
      return this.messageService.errorAlert(error);
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
      return this.messageService.errorAlert(error);
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
      return this.messageService.errorAlert(error);
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
      return this.messageService.errorAlert(error);
    });
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
