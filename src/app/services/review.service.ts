/* eslint-disable @typescript-eslint/member-ordering */
import 'firebase/firestore';

import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Review } from '../models/reviews.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private ngUnsubscribe: Subject<any> = new Subject();
  id;

  constructor(private afs: AngularFirestore, private authService: AuthService, public afAuth: AngularFireAuth) {}

  createOrUpdateReview(id = null, info): Promise<any> {
    if (id) {
      info.updated_at = firebase.default.firestore.Timestamp;
      return this.afs.doc(`reviews/${id}`).update(info);
    } else {
      info.displayName = this.authService.currentBehaviorUser.value.id;
      info.created_at = firebase.default.firestore.Timestamp;
      return this.afs.collection('reviews').add(info);
    }
  }

  getUserReviews(uid): Observable<any[]> {
    return this.afs.collection<Review>('reviews', (ref) => ref.where('id', '==', uid)).valueChanges();
    // .snapshotChanges()
    // .pipe(
    //   map((actions) =>
    //     actions.map((a) => {
    //       const data: any = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     })
    //   ),
    //   takeUntil(this.ngUnsubscribe)
    // );
  }

  getAllReviews() {
    return this.afs.collection<Review>('reviews', (ref) => ref.orderBy('displayName')).valueChanges();
    // .snapshotChanges()
    // .pipe(
    //   map((actions) =>
    //     actions.map((a) => {
    //       const data: any = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     })
    //   ),
    //   takeUntil(this.ngUnsubscribe)
    // );
  }

  getReview(id) {
    return this.afs.doc(`reviews/${id}`).valueChanges().pipe(take(1));
  }

  getUser(id) {
    return this.afs.doc(`users/${id}`).valueChanges().pipe(take(1));
  }

  deleteReview(id) {
    return this.afs.doc(`reviews/${id}`).delete();
  }
}
