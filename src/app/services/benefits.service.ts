import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Benefit } from '../models/benefits.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {
  private ngUnsubscribe: Subject<any> = new Subject();

  id;
  constructor(private afs: AngularFirestore, private authService: AuthService, public afAuth: AngularFireAuth) {

  }

  // createOrUpdateBenefit(id = null, info): Promise<any> {
  //   const queryRef = this.afs.collection<Benefit>('benefits', (ref) => ref.where('active', '==', true));
  //   if (id) {
  //     info.updated_at = firebase.firestore.Timestamp;
  //     return this.queryRef.update(info);
  //   } else {
  //     info.displayName = this.authService.currentBehaviorUser.value.id;
  //     info.created_at = firebase.firestore.Timestamp;
  //     return this.afs.collection('benefits').add(info);
  //   }
  // }

  getBenefits() {
    const queryRef = this.afs.collection<Benefit>('benefits', (ref) => ref.where('active', '==', true));
    return queryRef.snapshotChanges().pipe(
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




}
