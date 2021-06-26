/* eslint-disable @typescript-eslint/member-ordering */
import 'firebase/firestore';

import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from './auth.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ngUnsubscribe: Subject<any> = new Subject();
  user;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private messageService: MessageService,
    public afAuth: AngularFireAuth
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
      info.updated_at = firebase.default.firestore.Timestamp;
      return this.db
        .doc(`tickets/${id}`)
        .update(info)
        .then(() => this.messageService.generalToast(`Ticket ${id} updated successfully.`));
    } else {
      info.creator = this.authService.userId;
      info.created_at = firebase.default.firestore.Timestamp;
      return this.db
        .collection('tickets')
        .add(info)
        .then((res) => this.messageService.generalToast(`Ticket ${res.id} created successfully.`));
    }
  }

  getUserTickets() {
    const uid = this.authService.userId;
    return this.db
      .collection('tickets', (ref) => ref.where('creator', '==', uid))
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

  getAdminTickets() {
    return this.db
      .collection('tickets')
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

  getTicket(id) {
    // return this.db.doc(`tickets/${id}`).valueChanges().pipe(take(1));
    return this.db.doc(`tickets/${id}`).get();
  }

  deleteTicket(id) {
    return this.db.doc(`tickets/${id}`).delete();
  }

  getUser(uid) {
    return this.db.doc(`users/${uid}`).valueChanges().pipe(take(1));
    // this.authService.user.subscribe(user => this.user = user.email);
    // return this.user;
  }
}
