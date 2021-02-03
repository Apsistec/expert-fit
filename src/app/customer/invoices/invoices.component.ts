import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StripeService } from '../../services/stripe.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public stripeService: StripeService
  ) {}

  ngOnInit() {
    // this.authService.checkInvoices();
  }



  async dismissModal() {
    await this.modalCtrl.dismiss();
  }
}
