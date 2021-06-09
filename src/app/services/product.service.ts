import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products;
  prices;

  constructor(private afs: AngularFirestore) {}

  getProducts() {
    this.products = this.afs
      .collection('products', (ref) => ref.where('active', '==', true))
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          this.prices = await doc.ref.collection('prices').where('active', '==', true).orderBy('unit_amount').get();
        });
      });
    // return{products: this.products, prices: this.prices};
  }
}
