import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Component(
  {
    selector: 'app-customer-dashboard',
    templateUrl: 'list-users.component.html',
    styleUrls: ['./list-users.component.scss']
   })
export class ListUsersComponent implements OnInit {
    users = [];
    usersCollection: AngularFirestoreCollection;
    constructor(private afs: AngularFirestore) {}

    ngOnInit() {
        this.usersCollection = this.afs.collection<any>('users');
        this.usersCollection.snapshotChanges().pipe(map((users) => {
          this.users = users;
        }));
    }

    deleteUser(id: string) {

    }
}
