import { Component, OnInit } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { NgForm } from '@angular/forms';
import { loadStripe } from '@stripe/stripe-js';
import { take } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  user;
  role;
  signedIn;
  subscription;
  products: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore,
    private fun: AngularFireFunctions,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.user = this.authService.user$.pipe(take(1));
    if (this.user && this.user !== null) {
      this.signedIn = true;
      this.getSubscriptions();
    } else {
      this.signedIn = false;
    }
  }

  // Get all our products and render them to the page
  getProducts() {
    this.products = this.db.collection('products', (ref) =>
      ref.where('active', '==', true)
    );
    this.products.get();
    // .forEach( async ( prod ) => {
    //   await this.db.collection('prices', ref => ref.orderBy('unit_amount'));
    // });
    console.log('products: ', this.products);
    return this.products;
  }

  // Get all subscriptions for the customer
  getSubscriptions() {
    const snapshot = this.db
      .collection('customers')
      .doc(this.user.uid)
      .collection('subscriptions', (ref) =>
        ref.where('status', 'in', ['trialing', 'active'])
      );
    if (snapshot == null) {
      // Show products
      this.getProducts();
    } else {
      // In this implementation we only expect one Subscription to exist
      this.subscription = snapshot.doc[0].data();
      const priceData = this.subscription.price.get().data();
      return;
    }
  }

  // Checkout handler
  async onSubmit(purchaseForm: NgForm) {
    const docRef = await this.db
      .collection('customers')
      .doc(this.user.uid)
      .collection('checkout_sessions')
      .add({
        price: purchaseForm.value.price,
        allow_promotion_codes: true,
        tax_rates: environment.taxRates,
        success_url: 'https://expert-fitness-midland-tx.firebaseapp.com',
        cancel_url: 'https://expert-fitness-midland-tx.firebaseapp.com',
        metadata: {
          tax_rate: '10% sales tax exclusive'
        }
      });
    // Wait for the CheckoutSession to get attached by the extension
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      // Show an error to your customer and then inspect your function logs.
      if (error) {
        this.messageService.errorAlert(error);
      }
      // We have a session, let's redirect to Checkout
      // Init Stripe
      if (sessionId) {
        const stripe = await loadStripe(environment.stripePubKey);
        stripe.redirectToCheckout({ sessionId });
      }
    });
  }

  // Billing portal handler
  async openBillingPortal() {
    // Call billing portal function
    const functionRef = this.fun.httpsCallable(
      'ext-firestore-stripe-subscriptions-createPortalLink'
    );
    const url = await functionRef({
      returnUrl:
        'https://expert-fitness-midland-tx.firebaseapp.com/members/dashboard'
    });
    return url;
  }
}
