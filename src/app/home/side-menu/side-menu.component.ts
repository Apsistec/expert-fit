import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DateService } from 'src/app/services/date.service';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';
import { AboutAppComponent } from '../../shared/about-app/about-app.component';
import { GetStartedComponent } from '../../shared/get-started/get-started.component';
import { PrivacyComponent } from '../../shared/privacy/privacy.component';
import { TermsComponent } from '../../shared/terms/terms.component';
import { ContactPage } from '../contact/contact.page';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  yearDate: any = Date.now();
  user: User;

  constructor(
    private router: Router,
    public authService: AuthService,
    public userService: UserService,
    private modalController: ModalController,
    private messageService: MessageService,
    private dateService: DateService
  ) {}

  ngOnInit() {
    // this.user = this.authService.user;
    // this.authService.user.pipe(map((user) => (this.user = user)));
  }

  gotoGetStarted() {
    this.router.navigateByUrl('/get-started');
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

//   async showModalGetStarted() {
//     const modal = await this.modalController.create({
//       component: GetStartedComponent,
//       cssClass: 'modal-css',
//       showBackdrop: true
//     });
//     return modal.present().catch((err) => {
//       return this.messageService.errorAlert(err);
//     });
//   }

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
  async showModalContact() {
    const modal = await this.modalController.create({
      component: ContactPage,
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
