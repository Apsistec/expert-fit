import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Price } from '../models/price.model';
import { Product } from '../models/product.model';
import { convertSnaps } from './db-utils';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id;

  constructor(private db: AngularFirestore) {}

  loadProductsbyCategory(category: string): Observable<Product[]> {
    return this.db
      .collection('products', (ref) => ref.where('active', '==', true).where('stripe_metadata_productType', '==', category))
      .get()
      .pipe(map((result) => //convertSnaps<Product>(result)));
      result.docs.map(snap => {
        // this.id = snap.id;
        this.loadPrices(snap.id)
        return {
          id: snap.id,
          ...<any>snap.data()
        }

      })))
  }

  loadPrices(id): Observable<Price[]> {
    return this.db
      .collection(`products/${id}/prices`).get()
      .pipe(map((result) => convertSnaps<Price>(result)))
  }


//   convertSnaps<T>(results) {
//   return <T[]> results.docs.map(snap => {
//     return {
//       id: snap.id,
//       ...<any>snap.data()
//     }
//   })
// }
}
