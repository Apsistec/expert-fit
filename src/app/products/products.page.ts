import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
// import { map, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Price, Product } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  iOptions: any;
  prices;
  products: Observable<Product[]>;
  // products;

  constructor(private afs: AngularFirestore, public modal: ModalController) {}

  ngOnInit() {
    this.iOptions = {
      header: 'Available Pricing',
      subHeader: 'Select One',
      cssClass: 'selectOptions'
    };

    this.products = this.afs.collection<Product>('products', ref => ref.where('active', '==', true)).valueChanges();

  //  this.prices = firebase.default
  //     .app()
  //     .firestore()
  //     .collection('products')
  //     .where('active', '==', true)
  //     .get()
  //     .then(function (querySnapshot) {
  //       querySnapshot.forEach(async function (doc) {
  //         await doc.ref.collection('prices').where('active', '==', true).orderBy('unit_amount').get();
  //       });
  //     });
  }
}
