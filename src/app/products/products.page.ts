import { combineLatest, from, Observable } from 'rxjs';
import { map, mapTo, mergeMap, mergeMapTo, mergeScan, switchMap, tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { iosTransitionAnimation, ModalController } from '@ionic/angular';

import { Price } from '../models/price.model';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Stripe } from '@stripe/stripe-js';
// import { STRIPE_PUBLISHABLE_KEY } from '../../environments/environment';
// declare var stripe;

// stripe.Sripe

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  iOptions: any;
  // stripe: Stripe.(STRIPE_PUBLISHABLE_KEY);
  items: Observable<Product[]>;
  prices: any; //: Observable<Price[]>;
  // itemPrices: any; // Observable<any[]>;
  // services: Observable<Product[]>;
  // analysis: Observable<Product[]>;
  // servicesPrices: Observable<Price[]>;
  // analysisPrices: Observable<Price[]>;

  constructor(private db: AngularFirestore, public modal: ModalController, private productService: ProductService) {}

  ngOnInit() {

    this.iOptions = {
      header: 'Available Pricing',
      subHeader: 'Select One',
      cssClass: 'selectOptions'
    };

    this.reloadProducts();
    console.log('items: ', this.items);
    // console.log('items$: ', this.itemPrices);
  }

  reloadProducts() {
    this.items = this.productService.loadProductsbyCategory('item');
    // this.prices = from(this.items.pipe(map(
    //   item => item.map(i =>

    // this.db.collection(`prices`).onSnapshot((result) =>
    //   result.forEach((r) => {
    //     let rid = r.id;
    //     let rdata = r.data();
    //     this.prices = [{ rid, ...(rdata as Price) }];
    //     console.log('prices: ', this.prices);
    //   })
    // );
    // )))
    console.log('items2: ', this.items);
    // this.itemPrices = this.loadPrices('item');
    // console.log('items2$: ', this.itemPrices);
    // this.services = this.loadProductsbyCategory('service');
    // this.analysis = this.loadProductsbyCategory('analysis');
    // this.servicesPrices$ = this.loadPricesbyProduct(this.services$)
    // this.analysisPrices$ = this.loadPricesbyProduct(this.analysis$)
  }

  loadProductsbyCategory(category: string): Observable<Product[] | Price[]> | any {
    // return (
    return this.db
      .collection<Product>('products', (ref) =>
        ref.where('active', '==', true).where('stripe_metadata_productType', '==', category)
      )
      .get()
      .pipe(
        tap((products) =>
          products.docs.map((product) => {
            const id = product.id;
            const data = product.data();
            const items = { id, ...(data as Product) };
            console.log('items: ', items);
          })
        ),
        map((prods) => {
          prods.forEach((value) => {
            return this.db
              .collection<Price>(`products/${value.id}/prices`)
              .get()
              .pipe(
                map((products) => {
                  return products.docs.map((product) => {
                    const id = product.id;
                    const data = product.data();
                    return{ id, ...(data as Price) };
                  });
                })
              );
          });
        })
      );
  }

  // loadPrices(category) {
  //    return this.loadProductsbyCategory(category).pipe(
  //      tap(products => {
  //        for (let product of products){

  //        }
  //      })
  //    )
  //       }
  //   this.loadProductsbyCategory(category).subscribe(res =>
  //   ref.where('active', '==', true).where('stripe_metadata_productType', '==', category)
  // ).snapshotChanges()
  // .pipe(
  //   switchMap(
  //     products => products.map(
  //       product => {
  //         let id = product.payload.doc.id;
  //         let data = product.payload.doc.data();
  //     }
  //   )
  // )
  //   this.db.collection(`products/${res.id}`).get().pipe(switchMap(products => {
  //    products.docs.map(r => {
  //     this.prices = this.db.collection(`prices`).get().pipe(map(prices => Object.assign(products, {prices})))
  //   });
  //   combineLatest(...this.prices)
  //   })).subscribe(products => console.log(products))
  // }

  // console.log('products', products),
  // products.red
  // products.docs.

  // return this.db
  //   .collection<Price>(`products/${product.id}/prices`)
  //   .get()
  //   .pipe(
  //     map((prices) => {
  //       console.log('prices: ', prices)
  //       prices.docs.map((snap) => {
  //         return {
  //           id: snap.id,
  //           ...(<any>snap.data())
  //         };
  //       });
  //     })
  //   );

  // .forEach((products) => {
  //   console.log('products', products);
  //   products.map((product) => {
  //     console.log('product', product);
  //    return this.db
  //       .collection(`products/${product.id}/prices`)
  //       .get()
  //       .pipe(
  //         map((prices) => {
  //           prices.docs.map((snap) => {
  //             return {
  //               id: snap.id,
  //               ...(<any>snap.data())
  //             };
  //           });
  //         })
  //       );
  //   });
  // });

  //  loadProductsbyCategory(category: string) {
  //   return this.db
  //   .collection<Product>('products', (ref) =>
  //   ref.where('active', '==', true).where('stripe_metadata_productType', '==', category)
  //   )
  //   .valueChanges({idField: 'id'})

  //   // .pipe(map(
  //     //   prices => prices.forEach(price => price.id)
  //     // ))

  //   }

  //   loadPrices(category){
  //     return this.loadProductsbyCategory(category).pipe(
  //       switchMap(
  //        products =>
  //          for(let product of products)

  //       }

  //       )
  //         }

  // (products) => {
  // products.forEach((product) =>
  // this.db.collection<Price>(`products/${product.id}/prices`).valueChanges()

  // .pipe(switchMap(price => price.map(p => {
  //   let id = p.id;
  //   let data = p.data();
  //   return { id, ...data as Price};
  //   // return {id: p.id, ...data as Price: p.data() }
  //   // console.log('items$2: ', this.itemPrices)
  // })))
  //     )
  // )
  // }

  // loadProductsbyCategory(category: string): Observable<Product[]> {
  //   return this.db
  //     .collection<Product>('products', (ref) =>
  //       ref.where('active', '==', true).where('stripe_metadata_productType', '==', category)
  //     )
  //     .get()
  //     .pipe(
  //       map((products) =>
  //         products.docs.map((product) => {
  //           const id = product.id;
  //           const data = product.data();
  //           const items = { id, ...data };
  //           console.log('items: ', this.items);
  //           product.ref.collection('prices').onSnapshot(
  //             (result) =>
  //               result.forEach((r) => {
  //                 let id = r.id;
  //                 let data = r.data() ;
  //                 this.prices = [...this.prices, { id, ...(data as Price) }];
  //                 // this.prices = [{id,...data as Price}];
  //                 console.log('items$: ', this.prices);
  //               })
  //           );
  //           return items;
  //         })
  //       )
  //     );
  // }

  addToCart() {}

  goToCart() {}
}
