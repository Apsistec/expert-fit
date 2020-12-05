import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { NgForm } from '@angular/forms';
import { loadStripe } from '@stripe/stripe-js';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  user: User;
  role;
  signedIn;
  subscription;
  products: AngularFirestoreCollection;
  loading;

  constructor(
    private afs: AngularFirestore,
    private fun: AngularFireFunctions,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.authService.user$.pipe(map((user) => (this.user = user)));
    // this.afs.doc<User>(`users/${this.user.uid}`).valueChanges().pipe(map(user => this.user = user));
    console.log('prodUser: ', this.user);
    if (this.user && this.user !== null) {
      this.signedIn = true;
      //   this.getSubscriptions();
    } else {
      this.signedIn = false;
    }
  }

  // Get all our products and render them to the page
  getProducts() {
    this.products = this.afs.collection('products', (ref) =>
      ref.where('active', '==', true)
    );
    this.products.get();
    // .forEach( async ( prod ) => {
    //   await this.afs.collection('prices', ref => ref.orderBy('unit_amount'));
    // });
    console.log('products: ', this.products);
    return this.products;
  }

  // Get all subscriptions for the customer
  getSubscriptions() {
    const snapshot = this.afs
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
      return priceData || null;
    }
  }

  // Checkout handler
  async onSubmit(purchaseForm: NgForm) {
    const docRef = await this.afs
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
