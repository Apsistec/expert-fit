import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: Observable<Product[]>;
  itemPrice;
  constructor(private db: AngularFirestore) {}

  loadProductsbyCategory(category: string) {
    return this.db
      .collection<Product>('products', (ref) =>
        ref.where('active', '==', true).where('stripe_metadata_productType', '==', category)
      )
      .get().pipe(map(products => products.docs.map(product => {
            return {
              id: product.id,
              ...(<any>product.data())
            };
      })))
    }
  }
