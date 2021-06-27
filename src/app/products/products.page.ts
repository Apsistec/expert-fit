import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';

import { Price } from '../models/price.model';
import { Product } from '../models/product.model';
// import { ProductService } from '../services/product.service';
import { convertSnaps } from '../services/db-utils';
import { dataTool } from 'echarts/core';
// declare var stripe;

// stripe.Sripe

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  iOptions: any;

  // @Input()
  items: Observable<Product[]>;
  // @Input()
  prices; //: Observable<Price[]>;
  // services: Observable<Product[]>;
  // analysis: Observable<Product[]>;
  // servicesPrices: Observable<Price[]>;
  // analysisPrices: Observable<Price[]>;

  constructor(private db: AngularFirestore, public modal: ModalController) {}

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
    // this.productService.loadPricesbyCategory('item', product.id);
    // this.productService.loadPricesbyCategory('item', this.items).pipe
    // console.log('items: ', this.items);
    console.log('items2: ', this.items);
    console.log('items$2: ', this.prices);
    // this.services = this.loadProductsbyCategory('service');
    // this.analysis = this.loadProductsbyCategory('analysis');
    // this.servicesPrices$ = this.loadPricesbyProduct(this.services$)
    // this.analysisPrices$ = this.loadPricesbyProduct(this.analysis$)
  }

  loadProductsbyCategory(category: string): Observable<Product[]> {
    return this.db
      .collection<Product>('products', (ref) =>
        ref.where('active', '==', true).where('stripe_metadata_productType', '==', category)
      )
      .get()
      .pipe(
        map((products) =>
          products.docs.map((product) => {
            const id = product.id;
            const data = product.data();
            const items = { id, ...data };
            console.log('items: ', this.items);
            product.ref.collection('prices').onSnapshot(
              (result) =>
                result.forEach((r) => {
                  // const id = r.id;
                  // const data = r.data();
                  // this.price[id] = ...data ;
                  this.prices = [{ id: r.id, data: r.data() }];
                  console.log('items$: ', this.prices);
                })

              // result.docs.map((prices) => {
              //   const id = prices.id;
              //   const data = prices.data();
              //   this.price = { id, ...(<any>data) };
              //   return this.price;
              // }
            );
            return items;
          })
        )
      );
  }

  //       )
  //     );
  // }

  addToCart() {}

  goToCart() {}
}
