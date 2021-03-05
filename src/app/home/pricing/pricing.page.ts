import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Product} from 'src/app/models/products.model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit, AfterViewInit {

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


