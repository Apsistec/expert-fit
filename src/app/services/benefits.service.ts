import firebase from 'firebase/app';
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
export class BenefitsService {
  private ngUnsubscribe: Subject<any> = new Subject();

  id;
  ref;
  // benefits;
  refDoc;
  constructor(private afs: AngularFirestore, private authService: AuthService, public afAuth: AngularFireAuth) {

  }

  createOrUpdateBenefit(id = null, info): Promise<any> {
    if (id) {
      info.updated_at = firebase.firestore.Timestamp;
      return this.refDoc.update(info);
    } else {
      info.displayName = this.authService.currentBehaviorUser.value.id;
      info.created_at = firebase.firestore.Timestamp;
      return this.afs.collection('benefits').add(info);
    }
  }

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

  getBenefit(id) {
    this.id = id;
    return this.refDoc.valueChanges().pipe(take(1));
  }

  deleteBenefit(id) {
    this.id = id;
    return this.refDoc.delete();
  }
}
