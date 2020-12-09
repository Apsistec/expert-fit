import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PrivacyComponent } from '../privacy/privacy.component';
import { MessageService } from 'src/app/services/message.service';
import { AboutAppComponent } from '../about-app/about-app.component';
import { TermsComponent } from '../terms/terms.component';
import { VideoComponent } from '../intro-video/intro-video.component';
import { LoginComponent } from '../login/login.component';
// import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@Component({
  selector: 'app-modal-container',
  template: '',
})
export class ModalViewComponent implements OnInit, OnDestroy {
  destroy = new Subject<any>();
  modal;
  modalID;

  constructor(
    private modalController: ModalController,
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy)).subscribe((params) => {

      // this.modal.componentInstance.modalID = params.id;
      this.modalID = params.id;
      if (this.modalID === 'about-app') {
        this.showModalAbout();
      } else if (this.modalID === 'privacy') {
        this.showModalPrivacy();
      } else if (this.modalID === 'terms') {
        this.showModalTerms();
      } else if (this.modalID === 'intro-video') {
        this.showModalVideo();
      } else if (this.modalID === 'login') {
        this.showModalLogin();
      }

      console.log('modalID: ', this.modalID);
    });

  }



  async showModalVideo() {
    const modal = await this.modalController.create({
      component: VideoComponent,
      cssClass: 'video-css',
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

  async showModalLogin() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present()
    .then(result => {
      console.log('result: ', result);
    },
    reason => {
      console.log('reason: ', reason);
    })

    .catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
