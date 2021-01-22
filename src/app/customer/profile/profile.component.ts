import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PhotoService } from 'src/app/services/photo.service';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';
import { StripeService } from '../../services/stripe.service';
import { ThemeService } from '../../services/theme.service';
import { UserService } from '../../services/user.service';
import { CancelServiceComponent } from '../cancel-service/cancel-service.component';
import { InvoicesComponent } from '../invoices/invoices.component';

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
    private modalCtrl: ModalController,
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public stripe: StripeService,
    private router: Router,
    public photoService: PhotoService
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
    const modal = await this.modalCtrl.create({
      component: CancelServiceComponent
    });
    return modal.present();
  }

  async presentInvoicesModal() {
    const modal = await this.modalCtrl.create({
      component: InvoicesComponent
    });
    return modal.present();
  }

  // dismiss Modals
  onDismissModal() {
    return this.modalCtrl.dismiss();
  }

  support() {
    this.router.navigateByUrl('/dashboard');
  }
}
