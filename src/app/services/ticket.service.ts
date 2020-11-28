import * as fire from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (!user) {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }
    });
  }

  createOrUpdateTicket(id = null, info): Promise<any> {
    if (id) {
      return this.db.doc(`tickets/${id}`).update(info);
    } else {
      info.creator = this.auth.currentBehaviorUser.value.id;
      info.created_at = fire.default.firestore.FieldValue.serverTimestamp();
      return this.db.collection('tickets').add(info);
    }
  }

  getUserTickets() {
    const id = this.auth.currentBehaviorUser.value.id;
    return this.db
      .collection('tickets', (ref) => ref.where('creator', '==', id))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data: any = a.payload.doc.data();
            const i = a.payload.doc.id;
            return { i, ...data };
          })
        ),
        takeUntil(this.ngUnsubscribe)
      );
  }

  getAdminTickets() {
    return this.db
      .collection('tickets')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data: any = a.payload.doc.data();
            const id  = a.payload.doc.id;
            return { id, ...data };
          })
        ),
        takeUntil(this.ngUnsubscribe)
      );
  }

  getTicket(id) {
    return this.db.doc(`tickets/${id}`).valueChanges().pipe(take(1));
  }

  deleteTicket(id) {
    return this.db.doc(`tickets/${id}`).delete();
  }

  getUser(uid) {
    return this.db.doc(`users/${uid}`).valueChanges().pipe(take(1));
  }

}
