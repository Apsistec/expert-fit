import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/users.model';
import { Products } from 'src/app/models/products.model';
import { Observable, Subject } from 'rxjs';

declare var Stripe;

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  ref;
  user: User;
  role;
  signedIn;
  subscription;
  productsAll: AngularFirestoreCollection<any>;
  productsActive: Observable<any>;
  loading;
  segment: string;
  stripe;

  constructor(
    private afs: AngularFirestore,
    private fun: AngularFireFunctions,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  segmentChanged(event) {}

  ngOnInit() {
    // this.productCollection = this.afs.collection('products');

    this.productsAll = this.afs.collection('products');
    // this.productsActive = this.afs.collection('products', ref => ref.while('active', '==', 'true'));
    this.productsActive = this.productsAll.snapshotChanges().pipe(
      map( action => action.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

}

  // Get all our products and render them to the page
  // getProducts() {
  //   this.products = this.afs.collection('products', (ref) =>
  //     ref.where('active', '==', true)
  //   );
  //   const querySnapshot = this.products.get();
  //   querySnapshot.forEach( async ( doc ) => {
  //     console.log(doc.id, ' => ', doc.data());
  //     const priceSnap = await this.afs.collection('prices', ref => ref.orderBy('unit_amount'));
  //   });
  //   console.log('products: ', this.products);
  //   return this.products;

    // this.afs.collection('products')
    //   .where('active', '==', true)
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach(async (doc) => {
    //       console.log(doc.id, ' => ', doc.data());
    //       const priceSnap = await doc.ref.collection('prices').get();
    //       priceSnap.docs.forEach((doc) => {
    //         console.log(doc.id, ' => ', doc.data());
    //       });
    //     });
    //   });
  // }


  // Checkout handler
  // async onSubmit(purchaseForm: NgForm) {
  //   const docRef = await this.afs
  //   .collection('customers')
  //   .doc(this.user.uid)
  //   .collection('checkout_sessions')
  //   .add({
  //     price: purchaseForm.value.price,
  //       allow_promotion_codes: true,
  //       tax_rates: environment.taxRates,
  //       success_url: 'https://expert-fitness-midland-tx.firebaseapp.com/dashboard',
  //       cancel_url: 'https://expert-fitness-midland-tx.firebaseapp.com/dashboard',
  //       metadata: {
  //         tax_rate: '10% sales tax exclusive'
  //       }
  //     });
      // Wait for the CheckoutSession to get attached by the extension

  // // Billing portal handler
  // async openBillingPortal() {
    //   // Call billing portal function
  //   const functionRef = this.fun.httpsCallable(
    //     'ext-firestore-stripe-subscriptions-createPortalLink'
    //   );
    //   const url = await functionRef({
      //     returnUrl:
      //       'https://expert-fitness-midland-tx.firebaseapp.com/dashboard'
      //   });
      //   return url;
      // }
    // }

    // Get all subscriptions for the customer
    // getSubscriptions() {
    //   const snapshot = this.afs
    //     .collection('customers')
    //     .doc(this.user.uid)
    //     .collection('subscriptions', (ref) =>
    //       ref.where('status', 'in', ['trialing', 'active'])
    //     );
    //   if (snapshot == null) {
    //     // Show products
    //     this.getProducts();
    //   } else {
    //     // In this implementation we only expect one Subscription to exist
    //     this.subscription = snapshot.doc[0].data();
    //     const priceData = this.subscription.price.get().data();
    //     return priceData || null;
    //   }
    // }
