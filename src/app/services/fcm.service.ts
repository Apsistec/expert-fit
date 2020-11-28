
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Platform, ToastController } from '@ionic/angular';

import { tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { MessageService } from './message.service';

import { FCM } from '@ionic-native/fcm/ngx';
// import { AngularFirefunctions } from '@angular/fire/functions';
// import * from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token;
  firebaseNative: any;

  constructor(
    private afMessaging: AngularFireMessaging,
    private toastController: ToastController,
    private fcm: FCM,
    private platform: Platform,
    private messageService: MessageService
  ) {
    try {
      const MESSAGING = this.afMessaging;
      MESSAGING.onTokenRefresh = MESSAGING.onTokenRefresh.bind(MESSAGING);
      MESSAGING.onMessage = MESSAGING.onMessage.bind(MESSAGING);
    } catch (e) {this.messageService.errorAlert(e.message); }
  }

  getPermission() {
    let token$;
    if (this.platform.is('cordova')) {
      token$ = from(this.getPermissionNative());
    } else {
      token$ = this.getPermissionWeb();
    }

    return token$.pipe(
      tap(token => {
        this.token = token;
      })
    );
  }


  listenToMessages(): any {
    let messages$;

    messages$ = this.afMessaging.messages;


    return messages$.pipe(tap(v => this.showMessages(v)));
  }


  sub(topic): any {
    this.fcm.subscribeToTopic(topic).then(() => {
        this.messageService.generalToast(`subscribed to ${topic}`);
    }).catch((err) => this.messageService.errorAlert(JSON.stringify(err)));
  }

  unsub(topic) {
    this.fcm.unsubscribeFromTopic(topic).then(() => {
        this.messageService.generalToast(`unsubscribed from ${topic}`);
    }).catch((err) => this.messageService.errorAlert(JSON.stringify(err)));
  }

  private showMessages(payload) {
    let body;
    if (this.platform.is('android')) {
      body = payload.body;
    } else {
      body = payload.notification.body;
    }

    this.messageService.generalToast(body);
  }

  private getPermissionWeb() {
    return this.afMessaging.requestToken;
  }

  private async getPermissionNative() {
    let token;

    if (this.platform.is('ios')) {
      await this.firebaseNative.grantPermission();
    }

    token = await this.firebaseNative.getToken();

    return token;
  }
}
