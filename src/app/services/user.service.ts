import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { User } from '../models/users.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  favorites: string[] = [];


  constructor(
    public storage: Storage,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private messageService: MessageService,
    private router: Router
    ) {}

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

  getEmail() {
    let email;
    this.afAuth.authState.pipe(
      switchMap((user) => {
        email = user.email;
        return email;
      })
    );
  }

  setEmail(email: string): Promise<any> {
    return this.afs.doc(`users/${this.user.uid}`).update({
      email
    }).then(() => {
     this.messageService.generalToast('The email that you sign in with was successfully updated.');
    });
  }

  getDisplayName() {
    let displayName;
    this.afAuth.authState.pipe(
      switchMap((user) => {
        displayName = user.displayName;
        return displayName;
      })
    );
  }

  setDisplayName(displayName: string): Promise<any> {
    return this.afs.doc(`users/${this.user.uid}`).update({
      displayName
    }).then(() => {
     this.messageService.generalToast('Your display name has been successfully updated.');
    });
  }
}
