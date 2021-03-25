import { bounceOutUp, flash } from 'ng-animate';

import { transition, trigger, useAnimation } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';

import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { AboutAppComponent } from '../shared/about-app/about-app.component';
import { PrivacyComponent } from '../shared/privacy/privacy.component';
import { TermsComponent } from '../shared/terms/terms.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
  animations: [
    trigger('bounceOutUp', [
      transition(
        '* => *',
        useAnimation(bounceOutUp, {
          params: { timing: 1.75, delay: 2.4 }
        })
      )
    ]),
    trigger('flash', [
      transition(
        '* => *',
        useAnimation(flash, {
          params: { timing: 0.66, delay: 3.95 }
        })
      )
    ])
  ]
})
export class CustomerPage implements OnInit {
  title = 'Customer Page';
  fadeInDown: any;
  flash: any;
  slideInRight: any;
  slideInLeft: any;
  pulse: any;
  jello: any;
  bounceOutUp: any;
  showBackButton = false;
  userCollection: AngularFirestoreCollection<User>;
  user: User;

  constructor(
    public authService: AuthService,
    private modalController: ModalController,
    private messageService: MessageService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {}

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.modalController.dismiss();
      return this.messageService.errorAlert(error);
    });
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.modalController.dismiss();
      return this.messageService.errorAlert(error);
    });
  }

  async showModalAbout() {
    const modal = await this.modalController.create({
      component: AboutAppComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.modalController.dismiss();
      return this.messageService.errorAlert(error);
    });
  }
}
