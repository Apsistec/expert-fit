import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-popover-component',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  page;
  @Input() user: User;

  constructor(
    private popoverController: PopoverController,
    public afAuth: AngularFireAuth,
    private router: Router,
    private auth: AuthService
  ) {}

  // code for logout
  async logOut() {
    await this.dismissPopover();
    this.auth.SignOut();
  }

  async goToProfile() {
    const res = await this.dismissPopover();
    this.router.navigateByUrl('/customers/dashboard');
  }

  dismissPopover() {
    this.popoverController.dismiss();
  }
}
