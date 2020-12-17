import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Feed } from '../models/feeds.model';
// import { Message } from '../models/text-messages.model';
// import { Trainer } from '../models/trainer';
import { Admin } from '../models/admins.model';
import { Customer } from '../models/customers.model';
import { User } from '../models/users.model';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  usersRef: AngularFirestoreCollection<User>;
  users: Observable<User>;
  admins: Observable<Admin>;
  customers: Observable<Customer>;
  user: User;
  collectionVar: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService
  ) {
    this.authService.user$.pipe(
        map((user) => {
            this.user = user;
        })
      );
  }

  getUserFeed() {
    return this.db
      .collection('feed', ref => ref.where('uid', '==', this.user.uid))
      .valueChanges();
  }
  getUsers() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'USER'))
      .valueChanges();
  }
  getEmployees() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'EMPLOYEE'))
      .valueChanges();
  }
  getMembers() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'MEMBER'))
      .valueChanges();
  }
  getAdmins() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'ADMIN'))
      .valueChanges();
  }
  getPremiumSubs() {
    return this.db
      .collection('users', ref => ref.where('stripeRole', '==', 'premium'))
      .valueChanges();
  }
  getPlatinumSubs() {
    return this.db
      .collection('users', ref => ref.where('stripeRole', '==', 'platinum'))
      .valueChanges();
  }
  getBasicSubs() {
    return this.db
      .collection('users', ref => ref.where('stripeRole', '==', 'basic'))
      .valueChanges();
  }

  getCurrentCustomers() {
    return this.db
    .collection('users', ref => ref.where('subStatus', '==', 'current' || 'trialing'))
      .valueChanges();
  }
  getTroubledCustomers() {
    return this.db
    .collection('users', ref => ref.where('subStatus', '==', 'past_due' || 'unpaid'))
      .valueChanges();
  }
  getPastDueCustomers() {
    return this.db
    .collection('users', ref => ref.where('subStatus', '==', 'cancelled'))
      .valueChanges();
  }

}
