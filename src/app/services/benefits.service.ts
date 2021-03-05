import * as fire from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, take, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Benefit } from '../models/benefits.model';

@Injectable({
  providedIn: 'root'
})
export class BenefitService {
  private ngUnsubscribe: Subject<any> = new Subject();
  id;

  constructor(private afs: AngularFirestore, private authService: AuthService, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (!user) {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      } else if (user) {
        this.afAuth.user.pipe(map(u => {
          this.id = u.uid;
        }));
      }
    });
  }

  createOrUpdateBenefit(id = null, info): Promise<any> {
    if (id) {
      return this.afs.doc(`benefits/${id}`).update(info);
    } else {
      info.displayName = this.authService.currentBehaviorUser.value.id;
      info.created_at = fire.default.firestore.FieldValue.serverTimestamp();
      return this.afs.collection('benefits').add(info);
    }
  }

  // getUserBenefits(): Observable<any[]> {
  //   return this.afs
  //     .collection<Benefit>('benefits', (ref) => ref.where('id', '==', this.id))
  //     .snapshotChanges()
  //     .pipe(
  //       map((actions) =>
  //         actions.map((a) => {
  //           const data: any = a.payload.doc.data();
  //           const id = a.payload.doc.id;
  //           return { id, ...data };
  //         })
  //       ),
  //       takeUntil(this.ngUnsubscribe)
  //     );
  // }

  getAllBenefits() {
    return this.afs
      .collection<Benefit>('benefits')
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

  getBenefit(id) {
    return this.afs.doc(`benefits/${id}`).valueChanges().pipe(take(1));
  }

  deleteBenefit(id) {
    return this.afs.doc(`benefits/${id}`).delete();
  }
}
