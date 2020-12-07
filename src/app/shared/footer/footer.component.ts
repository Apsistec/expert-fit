import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { DateService } from 'src/app/services/date.service';
import { MessageService } from 'src/app/services/message.service';
import { AboutAppComponent } from '../about-app/about-app.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TermsComponent } from '../terms/terms.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  yearDate: any = Date.now();
  chooser;
  user: User;
  constructor(
      private modalController: ModalController,
      private messageService: MessageService,
      private router: Router,
      public authService: AuthService

  ) {

  }

  ngOnInit() {
    this.chooser = (this.router.url === '/testimonials') ? 'benefits' : 'ratings';

  }

  // async showModalTerms() {
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

}
