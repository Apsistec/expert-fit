import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';

import { Price } from '../models/price.model';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

// declare var stripe;

// stripe.Sripe

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  iOptions: any;
  items; //: Observable<Product[]>;
  services: Observable<Product[]>;
  analysis: Observable<Product[]>;
  servicesPrices: Observable<Price[]>;
  analysisPrices: Observable<Price[]>;
  itemPrices: Observable<Price[]>;

  id;

  constructor(private db: AngularFirestore, public modal: ModalController, private productService: ProductService) {}

  async ngOnInit() {
    this.iOptions = {
      header: 'Available Pricing',
      subHeader: 'Select One',
      cssClass: 'selectOptions'
    };

    this.reloadProducts();
  }

  reloadProducts() {
    this.items = this.loadProductsbyCategory('item');
    // this.services = this.loadProductsbyCategory('service');
    // this.analysis = this.loadProductsbyCategory('analysis');
    // this.servicesPrices$ = this.loadPricesbyProduct(this.services$)
    // this.analysisPrices$ = this.loadPricesbyProduct(this.analysis$)
    // this.itemPrices$ = this.loadPricesbyProduct(this.items$)
  }

  loadProductsbyCategory(category: string): Observable<Product[]> {
   const dbRef = this.db
      .collection<Product>('products', (ref) =>
        ref.where('active', '==', true).where('stripe_metadata_productType', '==', category)
      )
      return dbRef.valueChanges((snapshot: any) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('product: ', data.id);
        console.log('productdata: ', data);
      });
  }
  // .pipe(
  //   map((result) =>
  //     result.docs.map(forEach((products) => {
  //       products.ref.collection('prices').get().then(prices => convertSnaps(prices);
  //     })
  //   )
  // );
  // .pipe(
  //   map((result) =>
  //     result.docs.map((snap) => {
  //       snap.ref.collection('prices').onSnapshot(prices => this.itemPrices$ = prices)
  //       return {
  //         id: snap.id,
  //         ...(<any>snap.data())
  //       };
  //     })
  //   )
  // )
  // );
  // }

  // listPrices(){
  //   const prices = await stripe.prices.list({
  //     limit: 3,
  //   })
  // }

  // loadProductsbyCategory(category: string): Observable<Product[]> {
  // return this.db
  //   .collection('products', (ref) =>
  //     ref.where('active', '==', true).where('stripe_metadata_productType', '==', category)
  //   )
  //   .get()
  //   .pipe(
  //     map(
  //       result =>
  //         result
  //           .docs
  //           .map((snap) => {
  //             return {
  //               id: snap.id,
  //               ...<any>snap.data()
  //             };
  //           })
  //   ))
  // }

  addToCart() {}

  goToCart() {}
}
