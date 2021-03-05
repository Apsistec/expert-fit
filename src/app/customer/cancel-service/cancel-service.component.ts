import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { StripeService } from '../../services/stripe.service';

@Component({
  selector: 'app-cancel-service',
  templateUrl: './cancel-service.component.html',
  styleUrls: ['./cancel-service.component.scss']
})
export class CancelServiceComponent implements OnInit {
  // confirmation;

  constructor(
    public functions: AngularFireFunctions,
    public load: LoadingController,
    public modalController: ModalController,
    public authService: AuthService,
    public stripeService: StripeService,
    private navController: NavController

  ) {}
  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.navController.back();
    });
  }
}
