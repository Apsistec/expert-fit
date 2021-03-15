import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { StripeService } from '../../services/stripe.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    public stripeService: StripeService,
    private router: Router,
    private navController: NavController

  ) {}

  ngOnInit() {
    this.router.setUpLocationChangeListener();
  }



  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.navController.back();
    });
  }
}
