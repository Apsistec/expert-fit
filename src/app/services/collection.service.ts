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

  constructor(private afs: AngularFirestore, private authService: AuthService, private afAuth: AngularFireAuth) {}

  getUsers() {
    return this.afs.collection('users', (ref) => ref.where('role', '==', 'USER')).valueChanges();
  }
  getEmployees() {
    return this.afs.collection('users', (ref) => ref.where('role', '==', 'EMPLOYEE')).valueChanges();
  }
  getMembers() {
    return this.afs.collection('users', (ref) => ref.where('role', '==', 'MEMBER')).valueChanges();
  }
  getAdmins() {
    return this.afs.collection('users', (ref) => ref.where('role', '==', 'ADMIN')).valueChanges();
  }
  getPremiumSubs() {
    return this.afs.collection('users', (ref) => ref.where('stripeRole', '==', 'premium')).valueChanges();
  }
  getPlatinumSubs() {
    return this.afs.collection('users', (ref) => ref.where('stripeRole', '==', 'platinum')).valueChanges();
  }
  getBasicSubs() {
    return this.afs.collection('users', (ref) => ref.where('stripeRole', '==', 'basic')).valueChanges();
  }

  getCurrentCustomers() {
    return this.afs.collection('users', (ref) => ref.where('subStatus', '==', 'current' || 'trialing')).valueChanges();
  }
  getTroubledCustomers() {
    return this.afs.collection('users', (ref) => ref.where('subStatus', '==', 'past_due' || 'unpaid')).valueChanges();
  }
  getPastDueCustomers() {
    return this.afs.collection('users', (ref) => ref.where('subStatus', '==', 'cancelled')).valueChanges();
  }
}
