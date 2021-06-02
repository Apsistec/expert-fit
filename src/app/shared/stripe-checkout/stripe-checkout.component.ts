import { Subscription } from 'rxjs';

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';

// declare let Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit, OnDestroy {
  @Input() product;
  subs: Subscription = new Subscription();
  user;
  stripe; // : stripe.Stripe;

  constructor(private router: Router, private afs: AngularFirestore, private afAuth: AngularFireAuth) {}

  ngOnInit() {}

  async createSession() {
    this.afAuth.authState.subscribe((user) => (this.user = user));
    if (!this.user) {
      this.router.navigateByUrl('/signup');
    } else if (this.user && this.user !== null) {
      const docRef = await this.afs.collection('customers').doc(this.user.uid).collection('checkout_sessions').add({
        price: 'price_1IUusUKgDdcItEX8k4zQoogK',
        success_url: window.location.origin,
        cancel_url: window.location.origin
      });
      // [...]
      // Wait for the CheckoutSession to get attached by the extension
      docRef.onSnapshot(async (snap) => {
        const { error, sessionId } = snap.data();
        if (error) {
          // Show an error to your customer and
          // inspect your Cloud Function logs in the Firebase console.
          alert(`An error occured: ${error.message}`);
        }
        if (sessionId) {
          // We have a session, let's redirect to Checkout
          // Init Stripe
          const stripe = await loadStripe('pk_test_Rm4QbcP0thjADBses4DnzU5600K3q0XqMA');
          stripe.redirectToCheckout({ sessionId });
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
