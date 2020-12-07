import { Component, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PrivacyComponent } from '../privacy/privacy.component';
import { MessageService } from 'src/app/services/message.service';
import { AboutAppComponent } from '../about-app/about-app.component';
import { GetStartedComponent } from '../get-started/get-started.component';
import { TermsComponent } from '../terms/terms.component';
// import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@Component({
  selector: 'app-modal-container',
  template: ''
})
export class ModalViewComponent implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog = null;
    modal;
    modalID;

  constructor(
    private modalController: ModalController,
    private messageService: MessageService,
    route: ActivatedRoute,
    router: Router
  ) {
    route.params.pipe(takeUntil(this.destroy)).subscribe(params => {

        // When router navigates on this component is takes the params
        // and opens up the photo detail modal
    // this.modal = this.modalController.create({
    //   component: PrivacyComponent,
    //   cssClass: 'modal-css',
    //   backdropDismiss: true,
    //   swipeToClose: true,
    //   showBackdrop: true
    // });
    // this.modal.present().catch((err) => {
    //    this.messageService.errorAlert(err);
    // });

    // this.modal.componentInstance.modalID = params.id;
    this.modalID = params.id;
        // this.currentDialog = this.modalService.create(AboutAppComponent, );
        // this.currentDialog.componentInstance.photo = params.id;
    console.log('params: ', params);
    // this.showModal(this.modalID);
    //     // Go back to home page after the modal is closed
    //     this.currentDialog.result.then(result => {
    //       console.log('hello');
    //         router.navigateByUrl('/');
    //     }, reason => {
    //         router.navigateByUrl('/');
    //     });
    // });
    });
  }

  //   async showModalGetStarted() {
  //   const modal = await this.modalController.create({
  //     component: GetStartedComponent,
  //     cssClass: 'modal-css',
  //     showBackdrop: true,
  //     backdropDismiss: false
  //   });
  //   return modal.present().catch((err) => {
  //     return this.messageService.errorAlert(err);
  //   });
  // }
  //   async showModalTerms() {
  //   const modal = await this.modalController.create({
  //     component: TermsComponent,
  //     cssClass: 'modal-css',
  //     backdropDismiss: true,
  //     swipeToClose: true,
  //     showBackdrop: true
  //   });
  //   return modal.present().catch((err) => {
  //     return this.messageService.errorAlert(err);
  //   });
  // }

  // async showModalPrivacy() {
  //   const modal = await this.modalController.create({
  //     component: PrivacyComponent,
  //     cssClass: 'modal-css',
  //     backdropDismiss: true,
  //     swipeToClose: true,
  //     showBackdrop: true
  //   });
  //   return modal.present().catch((err) => {
  //     return this.messageService.errorAlert(err);
  //   });
  // }

  // async showModalAbout() {
  //   const modal = await this.modalController.create({
  //     component: AboutAppComponent,
  //     cssClass: 'modal-css',
  //     backdropDismiss: true,
  //     swipeToClose: true,
  //     showBackdrop: true
  //   });
  //   return modal.present().catch((err) => {
  //     return this.messageService.errorAlert(err);
  //   });
  // }

  // showModal(modalID) {
  //     if (modalID === 'about-app') {
  //         this.showModalAbout();
  //     } else if (modalID === 'privacy') {
  //         this.showModalPrivacy();
  //     } else if (modalID === 'terms') {
  //         this.showModalTerms();
  //     } else if (modalID === 'get-started') {
  //         this.showModalGetStarted();
  //     }
  // }

  ngOnDestroy() {
    this.destroy.next();
  }
}
