import { WizardComponent } from 'angular-archwizard';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { loadStripe } from '@stripe/stripe-js';

import { environment } from '../../../environments/environment';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';

// declare let Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;

  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  card;
  user: User;
  // stripe;
  stripe;
  cardErrors;

  constructor(public functions: AngularFireFunctions, private db: AngularFirestore, public authService: AuthService) {}

  async ngOnInit() {
    if (!this.user.uid) {
      this.wizard.goToStep(0);
    } else {
      this.wizard.goToStep(1);
    }

    this.stripe = await loadStripe(environment.STRIPE_PUBLISHABLE_KEY);
    const elements = await this.stripe.elements();
    const style = {
      base: {
        color: '#227733',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#121212'
        }
      },
      invalid: {
        color: '#f73008',
        iconColor: '#f73008'
      }
    };

    // Create an instance of the card Element.
    this.card = await elements.create('card', { style });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }

  //  async checkoutv2(item) {
  //     let uid = this.user.uid;

  //     const docRef = await this.db
  //       .collection("customers")
  //       .doc(uid)
  //       .collection("checkout_sessions")
  //       .add({
  //         unit_amount: item["unit_amount"],
  //         plan: item["id"],
  //         description: item["description"],
  //         interval: item["interval"],
  //         currency: item["currency"],
  //         type: item["type"],
  //         interval_count: item["interval_count"],
  //         active: item["active"],
  //         // allow_promotion_codes: true,
  //         // tax_rates: ["txr_1HCshzHYgolSBA35WkPjzOOi"],
  //         success_url: window.location.origin,
  //         cancel_url: window.location.origin,
  //         mode: "subscription",
  //         metadata: {},
  //       });

  //     // Wait for the CheckoutSession to get attached by the extension
  //     docRef.onSnapshot((snap) => {
  //       const { sessionId } = snap.data();
  //       if (sessionId) {
  //         // We have a session, let's redirect to Checkout
  //         // Init Stripe
  //         this.stripe.redirectToCheckout({ sessionId });
  //       } else {
  //         console.log("NOPE");
  //       }
  //     });
  //   }


}
