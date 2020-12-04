import { transition, trigger, useAnimation } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { bounceOutUp, flash, jello, pulse } from 'ng-animate';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { AboutAppComponent } from '../shared/about-app/about-app.component';
import { GetStartedComponent } from '../shared/get-started/get-started.component';
import { PrivacyComponent } from '../shared/privacy/privacy.component';
import { TermsComponent } from '../shared/terms/terms.component';
import { IntroVideoComponent } from './intro-video/intro-video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [DatePipe],
  animations: [
    trigger('bounceOutUp', [
      transition(
        '* => *',
        useAnimation(bounceOutUp, {
          params: { timing: 1.75, delay: 2.4 }
        })
      )
    ]),
    trigger('jello', [
      transition(
        '* => *',
        useAnimation(jello, {
          params: { timing: 5, delay: 1 }
        })
      )
    ]),
    trigger('pulse', [
      transition(
        '* => *',
        useAnimation(pulse, {
          params: { timing: 1.75, delay: 1.2 }
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
export class HomePage implements OnInit {
  title = 'Home';
  fadeInDown: any;
  flash: any;
  slideInRight: any;
  slideInLeft: any;
  pulse: any;
  jello: any;
  bounceOutUp: any;
  yearDate: string;
  showBackButton = false;
  userCollection: AngularFirestoreCollection<User>;
  user: User;

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private modalController: ModalController,
    private messageService: MessageService,
    private afAuth: AngularFireAuth,
    public datepipe: DatePipe
  ) {
    // this.afAuth.credential.pipe(map((user) => (this.user = user)));
    // this.user = this.authService.currentBehaviorUser;
    // this.afAuth.authState.pipe(map(user => this.user = user));
    // this.user = this.afAuth.currentUser;

  }

  ngOnInit() {
    // await this.authService.user$.subscribe(user => this.user = user);
    this.getUserInfo();
    console.log('userHome: ', this.user);
    this.yearDate = this.datepipe.transform(Date.now(), 'yyyy');
  }

  getUserInfo(){
    return this.authService.user$.pipe(take(1), map(user => this.user = user));
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalVideo() {
    const modal = await this.modalController.create({
      component: IntroVideoComponent,
      cssClass: 'video-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
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
      showBackdrop: true
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalGetStarted() {
    const modal = await this.modalController.create({
      component: GetStartedComponent,
      cssClass: 'modal-css',
      showBackdrop: true,
      backdropDismiss: false
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
      showBackdrop: true
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
