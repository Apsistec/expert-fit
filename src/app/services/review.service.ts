import * as fire from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Review } from '../models/reviews.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private ngUnsubscribe: Subject<any> = new Subject();



  constructor(private afs: AngularFirestore, private authService: AuthService, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (!user) {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }
    });
  }

  createOrUpdateReview(id = null, info): Promise<any> {
    if (id) {
      return this.afs.doc(`reviews/${id}`).update(info);
    } else {
      info.creator = this.authService.currentBehaviorUser.value.id;
      info.created_at = fire.default.firestore.FieldValue.serverTimestamp();
      return this.afs.collection('reviews').add(info);
    }
  }

  getUserReviews() {
    // const id = this.authService.currentBehaviorUser.value.id;
    // return this.afs
    //   .collection<Review>('reviews', (ref) => ref.where('displayName', '==', id))
    //   .snapshotChanges()
    //   .pipe(
    //     map((actions) =>
    //       actions.map((a) => {
    //         const data: any = a.payload.doc.data();
    //         // tslint:disable-next-line: no-shadowed-variable
    //         const i = a.payload.doc.id;
    //         return { i, ...data };
    //       })
    //     ),
    //     takeUntil(this.ngUnsubscribe)
    //   );
  }

  getAllReviews() {
    return this.afs
      .collection<Review>('reviews')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data: any = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        ),
        takeUntil(this.ngUnsubscribe)
      );
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
