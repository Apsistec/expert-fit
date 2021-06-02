import 'firebase/auth';

import firebase from 'firebase/app';
import { of } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

import { User } from '../models/users.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  favorites: string[] = [];
  user: User;

  constructor(
    public storage: Storage,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private messageService: MessageService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (!user) {
        return of(null);
      }
      {
        this.user = user;
      }
    });
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  // get user(): User {
  //   return this.authenticated ? this.user : null;
  // }

  get userId(): string {
    return this.authenticated ? this.user.uid : null;
  }

  // getEmail() {
  //   return this.afAuth.authState.pipe(
  //     map((user) => {
  //       this.email = user.email;
  //     })
  //     );
  //   }

  get email(): string {
    return this.authenticated ? this.user.email : '';
  }

  setEmail(email: string): Promise<any> {
    firebase.auth().currentUser.updateEmail(email);
    return this.afs
      .doc(`users/${this.user.uid}`)
      .update({
        email
      })
      .then(() => {
        this.messageService.generalToast('Your email was successfully updated.');
      })
      .catch((error) => this.messageService.errorAlert(error));
  }

  //   getDisplayName() {
  //     this.afAuth.authState.pipe(
  //       map((user) => {
  //         this.displayName = user.displayName;
  //     })
  //     );
  // }

  get displayName(): string {
    return this.authenticated ? this.user.displayName : 'User';
  }

  setDisplayName(displayName: string): Promise<any> {
    return this.afs
      .doc(`users/${this.user.uid}`)
      .update({
        displayName
      })
      .then(() => {
        this.messageService.generalToast('Your display name was successfully updated.');
      });
  }

  hasFavorite(videoName: string): boolean {
    return this.favorites.indexOf(videoName) > -1;
  }

  addFavorite(videoName: string): void {
    this.favorites.push(videoName);
  }

  removeFavorite(videoName: string): void {
    const index = this.favorites.indexOf(videoName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }
}
