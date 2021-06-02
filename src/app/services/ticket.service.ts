import 'firebase/firestore';

/* eslint-disable @typescript-eslint/member-ordering */
import firebase from 'firebase/app';
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
    private afs: AngularFirestore,
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
      info.updated_at = firebase.firestore.Timestamp;
      return this.afs
        .doc(`tickets/${id}`)
        .update(info)
        .then(() => this.messageService.generalToast(`Ticket ${id} updated successfully.`));
    } else {
      info.creator = this.authService.userId;
      info.created_at = firebase.firestore.Timestamp;
      return this.afs
        .collection('tickets')
        .add(info)
        .then((res) => this.messageService.generalToast(`Ticket ${res.id} created successfully.`));
    }
  }

  getUserTickets() {
    const uid = this.authService.userId;
    return this.afs
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
    return this.afs
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
    // return this.afs.doc(`tickets/${id}`).valueChanges().pipe(take(1));
    return this.afs.doc(`tickets/${id}`).get();
  }

  deleteTicket(id) {
    return this.afs.doc(`tickets/${id}`).delete();
  }

  getUser(uid) {
    return this.afs.doc(`users/${uid}`).valueChanges().pipe(take(1));
    // this.authService.user.subscribe(user => this.user = user.email);
    // return this.user;
  }
}
