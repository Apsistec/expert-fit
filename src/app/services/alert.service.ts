import { Injectable, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Plugins, PushNotification } from '@capacitor/core';
import { FCM } from '@capacitor-community/fcm';
import { MessageService } from './message.service';

const { PushNotifications } = Plugins;
const fcm = new FCM();

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  notifications: PushNotification[] = [];
  //
  // move to fcm demo
  topicName = 'super-awesome-topic';
  remoteToken: string;

  constructor( private platform: Platform, private zone: NgZone, private messageService: MessageService ) {


    PushNotifications.addListener('registration', (data) => {
      this.messageService.generalToast(JSON.stringify(data));
      console.log(data);
    });
    PushNotifications.register().then(() => this.messageService.generalToast(`registered for push`));
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        console.log('notification ' + JSON.stringify(notification));
        this.zone.run(() => {
          this.notifications.push(notification);
        });
      }
    );
  }

  //
  // move to fcm demo
  subscribeTo() {
    PushNotifications.register()
      .then((_) => {
        fcm
          .subscribeTo({ topic: this.topicName })
          .then((r) => this.messageService.generalToast(`subscribed to topic ${this.topicName}`))
          .catch((error) => console.log(error));
      })
      .catch((error) => this.messageService.errorAlert(JSON.stringify(error)));
  }

  unsubscribeFrom() {
    fcm
      .unsubscribeFrom({ topic: 'test' })
      .then((r) => this.messageService.generalToast(`unsubscribed from topic ${this.topicName}`))
      .catch((error) => console.log(error));
    if (this.platform.is('android')) { fcm.deleteInstance(); }
  }

  getToken() {
    fcm
      .getToken()
      .then((result) => {
        this.remoteToken = result.token;
      })
      .catch((error) => this.messageService.errorAlert(JSON.stringify(error)));
  }
}
