import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';

import { User } from '../models/users.model';
import { MessageService } from './message.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  user: User;
  subscriptions: Observable<any>;
  confirmation; // : Observable<any>;
  invoices: Observable<any>;
  discount;
  isLoading = false;

  constructor(
    private afAuth: AngularFireAuth,
    private functions: AngularFireFunctions,
    private messageService: MessageService,
    private router: Router,
    private spinner: SpinnerService,
    private afs: AngularFirestore
  ) {
    this.afAuth.user.pipe(
      map((user) => {
        if (user) {
          this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          of(null);
        }
      })
    );
  }

  async subscribeUser(source, planId) {
    this.isLoading = true;
    const fun = this.functions.httpsCallable('stripeCreateSubscription');
    this.confirmation = await fun({
      source: source.id,
      uid: this.user.uid,
      plan: planId
    }).toPromise();
  }

  async getSubscriptions() {
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptions = fun({ uid: this.user.uid });
  }

  async cancelSubscription() {
    this.spinner.loadSpinner();

    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    this.isLoading = true;
    this.confirmation = await fun({
      uid: this.user.uid,
      subId: this.user.subId
    })
      .toPromise()
      .then(() => {
        this.isLoading= false;
        this.spinner.dismissSpinner();
        this.messageService.cancelledAlert();
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        this.isLoading= false;
        this.spinner.dismissSpinner();
        this.messageService.errorAlert(error);
      });
  }

  async getInvoices() {
    const fun = this.functions.httpsCallable('stripeGetInvoices');
    return (this.invoices = fun({ uid: this.user.uid }));
  }

  // Coupons
  // getCoupon() {
  //   const coupon: any = document.getElementById('couponForm');
  //   const couponFun = this.functions.httpsCallable('stripeGetCoupon');
  //   coupon.onblur = async () => {
  //     const couponCode: Coupon = await couponFun({ coupon });
  //     if ( couponCode.name === coupon.name ) {
  //       this.discount = couponCode.value;
  //       this.messageService.generalToast('');
  //     }
  //   };
  // }
}
