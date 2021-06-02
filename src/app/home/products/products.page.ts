import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Price } from 'src/app/models/price.model';
import { Product } from 'src/app/models/products.model';

import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  segment = 'services';
  prices: Observable<any>;
  doc;
  id;
  data;
  products: Observable<any>; // QueryDocumentSnapshot<Product>;
  productCollection: AngularFirestoreCollection<Product>;
  priceCollection: AngularFirestoreCollection<Price>;
  priceDocument: AngularFirestoreDocument<Price>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    // this.prices = this.afs.collection('products').doc('')
    //   this.productCollection = this.afs.collection<Product>('products', (ref) =>
    //     ref.where('active', '==', true).orderBy('name')
    //   );
    //   this.products = this.getProducts();
    //   console.log('newProducts', this.products);
    // }
    // getProducts(): Observable<any> {
    //   return this.productCollection.get().pipe(
    //     map(
    //       (querySnapshot) => {
    //       querySnapshot.forEach(async (doc) => {
    //         console.log(doc.id, ' => ', doc.data());
    //         const priceSnap = await doc.ref.collection('prices').get();
    //         priceSnap.docs.forEach((doc) => {
    //           console.log(doc.id, ' => ', doc.data());
    //         });
    //       });
    //     })
    //   );
    // this.productsGet();
  // }
  // productsGet() {
  //   const query = this.afs.collectionGroup('products', (ref) => ref.where('active', '==', true).orderBy('name'));
  //   console.log('query: ', query);
  // }

  // getProducts(): Observable<any> {

    // this.products.forEach().then
    //  this.products = this.afs.collection('products', (ref) => ref.where('active', '==', true).orderBy('name')).snapshotChanges();
     this.products = this.afs.collection('products', (ref) => ref.where('active', '==', true)).valueChanges();

     const querySnapshot = this.afs.collection('products', (ref) => ref.where('active', '==', true)).snapshotChanges();
  querySnapshot.forEach( doc => { this.doc = doc;});

  // this.prices = this.afs.doc(`products/${this.doc.id}/prices`), (ref) => ref.where('active', '==', true).valueChanges();

    }
      // getPrices(id) {
//   this.priceCollection = this.afs.collection<Price>(`products/${id}/prices`, (ref) =>
//     ref.where('active', '==', true).orderBy('unit_value')
//   );
//   return this.priceCollection.get();
// .pipe(
// return this.priceCollection.snapshotChanges().pipe(
//   map((actions) =>
//     actions.map((a) => {
//       const data = a.payload.doc.data();
//       const id = a.payload.doc.id;
//       return { id, ...data };
//     })
//   )
// );
// }
// getPr(id): Observable<any> {
//   return this.afs.doc(`products/${id}/prices`).snapshotChanges().pipe(
//     map((actions) =>
//       actions.map((a) => {
//         const data = a.payload.doc.data();
//         const id = a.payload.doc.id;
//       })
//   ));
// }

// getPrices(){
//   this.productCollection.get().pipe(map(
//     (querySnapshot) => {
//     querySnapshot.forEach(async (doc) => {
//       // console.log(doc.id, ' => ', doc.data());
//       const priceSnap = await doc.ref.collection('prices').get();
//       priceSnap.docs.forEach((doc) => {
//         console.log(doc.id, ' => ', doc.data());
//       });
//     });
//   }));
// }

segmentChanged(event) {
  console.log(this.segment);
}






}
