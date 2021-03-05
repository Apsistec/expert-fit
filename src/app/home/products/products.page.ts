import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Product} from 'src/app/models/products.model';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
export class ProductsPage implements OnInit, AfterViewInit {

  products; // : Observable<Product>;

  constructor(private afs: AngularFirestore, private fun: AngularFireFunctions) {}

  ngOnInit() {
  //  this.afs
  //     .collection<Product>('products', ref => ref.where('active', '==', true)).get().pipe(switchMap(products: any[]) => {
  //       const res = products.map((r: any) => {
  //         return this.afs.collection(`products/${r.id}/pricing`).snapshotChanges().pipe(
  //           map(pricing => Object.assign(product, {pricing}))
  //         );
  //       });
  //       return combineLatest(...res);
  //     })   
  }

  ngAfterViewInit() {
    let productsRef = this.afs.collection<Product>('products', ref => ref.where('active', '==', true));
    this.products = productsRef.valueChanges();

        
  }
}
