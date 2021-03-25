import { map } from 'rxjs/operators';

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

import { Product } from '../../models/products.model';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit, AfterViewInit {
  products; // Observable<Product[]>;
  pricing;
  segment = 'defualt';
  user: User;
  productCollection: AngularFirestoreCollection<Product>;
  prices;

  constructor(private afs: AngularFirestore, private fun: AngularFireFunctions) {}

  async ngOnInit() {
    const prodRef = this.afs.collection<Product>('products', (ref) => ref.where('active', '==', true));
    this.products = await prodRef.valueChanges();

    this.prices = await prodRef.snapshotChanges().pipe(
      map((actions) => {
        actions.map((a) => {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );


    console.log('prod: ', this.products);
    console.log('pri: ', this.prices);
  }

  ngAfterViewInit() {}
}
