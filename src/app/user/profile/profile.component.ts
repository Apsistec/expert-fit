import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';
import { StripeService } from '../../services/stripe.service';
import { ThemeService } from '../../services/theme.service';
import { CancelServiceComponent } from '../../customer/cancel-service/cancel-service.component';
import { InvoicesComponent } from '../../customer/invoices/invoices.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  title = 'User Profile';
  planId;
  atp;
  buy;
  purchase;
  user: User;
  email: any;
  subs: any;

  constructor(
    private theme: ThemeService,
    private modalController: ModalController,
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public stripe: StripeService,
    private router: Router,
    private navController: NavController
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  // Themes
  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }

  // Stripe Account Administration Modals
  async presentCancelSubModal() {
    const modal = await this.modalController.create({
      component: CancelServiceComponent
    });
    return modal.present();
  }

  async presentInvoicesModal() {
    const modal = await this.modalController.create({
      component: InvoicesComponent
    });
    return modal.present();
  }
  async presentSettingsModal() {
    const modal = await this.modalController.create({
      component: SettingsComponent
    });
    return modal.present();
  }

  // dismiss Modals
  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.navController.back();
    });
  }

  support() {
    this.router.navigateByUrl('/user/dashboard');
  }
}
