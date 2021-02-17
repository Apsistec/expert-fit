import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  user: User;
  constructor(
    public authService: AuthService,
    public modalController: ModalController,
    public messageService: MessageService
  ) {}

  ngOnInit() {}

  // async showLoginModal() {
  //   this.dismissModal();
  //   const modal = await this.modalController.create({
  //     component: LoginComponent,
  //     componentProps: {
  //       cssClass: 'modal-css'
  //     }
  //   });
  //   await modal.present().catch((error) => this.messageService.errorAlert(error));
  // }

  dismissModal() {
    this.modalController.dismiss().catch((error) => this.messageService.errorAlert(error));
  }
}
