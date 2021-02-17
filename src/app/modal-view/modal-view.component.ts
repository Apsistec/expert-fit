import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { MessageService } from '../services/message.service';
import { AboutAppComponent } from '../shared/about-app/about-app.component';
import { PrivacyComponent } from '../shared/privacy/privacy.component';
import { TermsComponent } from '../shared/terms/terms.component';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

// import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@Component({
  selector: 'app-modal-container',
  template: ''
})
export class ModalViewComponent implements OnInit, OnDestroy {
  destroy = new Subject<any>();
  modal;
  modalID;
  constructor(
    private modalController: ModalController,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.modalID = params.id;
      console.log('modalID: ', this.modalID);
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
      }
    });

  }

  ngOnInit() {
    // route.params.pipe(takeUntil(this.destroy)).subscribe((params) => {
    //   // this.modal.componentInstance.modalID = params.id;
    //   this.modalID = params.id;
    //   if (this.modalID === 'about-app') {
    //     this.showModalAbout();
    //   } else if (this.modalID === 'privacy') {
    //     this.showModalPrivacy();
    //   } else if (this.modalID === 'terms') {
    //     this.showModalTerms();
    //   } else if (this.modalID === 'login') {
    //     this.showModalLogin();
    //   }

    //   console.log('modalID: ', this.modalID);
    // });
  }

  async showModalTerms() {
    // this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'modal-css',
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalPrivacy() {
    // this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: PrivacyComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalSignup() {
    // this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: SignupComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalForgotPassword() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: ForgotPasswordComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalAbout() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AboutAppComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalLogin() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    return modal
      .present()
      .then(
        (result) => {
          console.log('result: ', result);
        },
        (reason) => {
          console.log('reason: ', reason);
        }
      )

      .catch((err) => {
        return this.messageService.errorAlert(err);
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
