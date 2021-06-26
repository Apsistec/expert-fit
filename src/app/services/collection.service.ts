import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  // usersRef: AngularFirestoreCollection<User>;
  // feedsRef: AngularFirestoreCollection<any>;
  // admins: Observable<Admin>;
  // customers: Observable<Customer>;
  // user: User;
  // collectionVar: AngularFirestoreCollection;

  constructor(private db: AngularFirestore, private authService: AuthService, private afAuth: AngularFireAuth) {}

  getUsers() {
    return this.db.collection('users', (ref) => ref.where('role', '==', 'USER')).valueChanges();
  }
  getEmployees() {
    return this.db.collection('users', (ref) => ref.where('role', '==', 'EMPLOYEE')).valueChanges();
  }
  getMembers() {
    return this.db.collection('users', (ref) => ref.where('role', '==', 'MEMBER')).valueChanges();
  }
  getAdmins() {
    return this.db.collection('users', (ref) => ref.where('role', '==', 'ADMIN')).valueChanges();
  }
  getPremiumSubs() {
    return this.db.collection('users', (ref) => ref.where('stripeRole', '==', 'premium')).valueChanges();
  }
  getPlatinumSubs() {
    return this.db.collection('users', (ref) => ref.where('stripeRole', '==', 'platinum')).valueChanges();
  }
  getBasicSubs() {
    return this.db.collection('users', (ref) => ref.where('stripeRole', '==', 'basic')).valueChanges();
  }

  getCurrentCustomers() {
    return this.db.collection('users', (ref) => ref.where('subStatus', '==', 'current' || 'trialing')).valueChanges();
  }
  getTroubledCustomers() {
    return this.db.collection('users', (ref) => ref.where('subStatus', '==', 'past_due' || 'unpaid')).valueChanges();
  }
  getPastDueCustomers() {
    return this.db.collection('users', (ref) => ref.where('subStatus', '==', 'cancelled')).valueChanges();
  }
}
