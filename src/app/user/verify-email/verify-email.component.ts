import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';

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
    public messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  goToLogin() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
