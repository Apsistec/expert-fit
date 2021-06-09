import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';

import { environment } from '../../environments/environment';
import { ProductService } from '../services/product.service';

declare let Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit, OnDestroy {
  stripe: stripe.Stripe;

  products; //: Observable<any>;
  prices; //: Observable<any>;
  sub: Subscription = new Subscription();
  doc: AngularFirestoreDocument;
  constructor(private afs: AngularFirestore, public modal: ModalController, private productService: ProductService) {}

  ngOnInit() {
    this.stripe = Stripe(environment.STRIPE_PUBLISHABLE_KEY);

    const query = this.afs.collection('products', (ref) => ref.where('active', '==', true));
    this.products = query.valueChanges();
    // .subscribe((products) => {
    //   this.products = products;
    // });

    this.prices = this.products.array.forEach((document) => {
      this.doc = document;
      this.doc.collection('prices', (ref) => ref.where('active', '==', true).orderBy('unit_amount')).valueChanges();
      // .subscribe((prices) => {
      //   this.prices = prices;
      // });
    });

    // this.products.array.forEach(prices => {
    //   this.prices =
    // });
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
