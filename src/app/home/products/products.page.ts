import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, Price, Subscription } from 'src/app/models/products.model';
// import { NgForm } from '@angular/forms';
// import { map } from 'rxjs/operators';
// import { AuthService } from '../../services/auth.service';
// import { MessageService } from '../../services/message.service';
// import { environment } from '../../../environments/environment';
// import { User } from 'src/app/models/users.model';
// import { Products } from 'src/app/models/products.model';
// import { Observable, Subject } from 'rxjs';
// import { ProductService } from 'src/app/services/product.service';

// declare var Stripe;

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {

  products;
  // prices: Price;
  // subscriptions: Subscription;

  constructor(private afs: AngularFirestore, private fun: AngularFireFunctions) {}


  ngOnInit() {
     return this.afs
      .collection('products', (ref) => ref.where('active', '==', true))
      .get()
      .pipe(
        map((querySnapshot) => {
          querySnapshot.forEach(async (res) => {
            console.log(res.id, ' => ', res.data());
            const priceSnap = await res.ref.collection('prices').get();
            priceSnap.docs.forEach((doc) => {
              console.log(doc.id, ' => ', doc.data());
            });
          });
        })
      );
  }
}
