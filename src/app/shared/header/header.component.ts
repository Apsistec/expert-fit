import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { GetStartedComponent } from '../get-started/get-started.component';
import { PopoverComponent } from '../popover/popover.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User;
  currentRoute;
  showBackButton = false;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController,
    private messageService: MessageService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.authService.user.pipe(map((user) => (this.user = user)));

    if (this.router.url === '/home') {
      this.showBackButton = false;
    } else {
      this.showBackButton = true;
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'user-popover',
    });
    return popover.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

//   async showModalGetStarted() {
//     const modal = await this.modalController.create({
//       component: GetStartedComponent,
//       cssClass: 'modal-css',
//       showBackdrop: true,
//       backdropDismiss: false,
//     });
//     return modal.present().catch((err) => {
//       return this.messageService.errorAlert(err);
//     });
//   }
}
