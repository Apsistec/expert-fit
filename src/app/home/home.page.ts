import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { bounceOutUp, flash } from 'ng-animate';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { AboutAppComponent } from '../shared/about-app/about-app.component';

import { IntroVideoComponent } from '../shared/intro-video/intro-video.component';
import { PrivacyComponent } from '../shared/privacy/privacy.component';
import { TermsComponent } from '../shared/terms/terms.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('bounceOutUp', [
      transition(
        '* => *',
        useAnimation(bounceOutUp, {
          params: { timing: 1.75, delay: 2.4 },
        })
      ),
    ]),
    trigger('flash', [
      transition(
        '* => *',
        useAnimation(flash, {
          params: { timing: 0.66, delay: 3.95 },
        })
      ),
    ]),
  ],
})
export class HomePage implements OnInit {
  title = 'Home';
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
    public userService: UserService,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  async showModalVideo() {
    const modal = await this.modalController.create({
      component: IntroVideoComponent,
      cssClass: 'video-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalAbout() {
    const modal = await this.modalController.create({
      component: AboutAppComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }
}
