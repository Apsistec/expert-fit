import { Component, Input, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import firebase from 'firebase/app';
import 'firebase/messaging';
import { Router } from '@angular/router';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { PopoverService } from './services/popover.service';
// import { LoginComponent } from './login/login.component';

import { User } from './models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  showBackButton: boolean;
  path;
  displayToken: string;
  showPushNotifyBar = true;
  @Input() choice;

  constructor(
    updates: SwUpdate,
    push: SwPush,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public modalController: ModalController,
    public authService: AuthService,
    public popoverService: PopoverService
  ) {
    updates.available.subscribe((_) =>
      updates.activateUpdate().then(() => {
        console.warn('Update Available... Reloading to Update');
        document.location.reload();
      })
    );
    push.messages.subscribe((msg) => console.warn('push message: ', msg));
    push.notificationClicks.subscribe((click) => console.warn('notification click: ', click));
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebaseConfig);
      navigator.serviceWorker.getRegistration().then(() =>
        firebase.messaging().getToken({
          vapidKey: 'BFZIBA94F79A9vt1yD4DBZX5BD460KEm3WWdRdzGV-FSBfIgGBoajnRhwWOUeHSEb9cUmIJejFHYlMYfCtVbN3c'
        })
      );
    }
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    // if (this.showPushNotifyBar) {
    //   this.messageService.notifyOrCancel();
    // }
  }

  cancelNotificationBar() {
    this.showPushNotifyBar = !this.showPushNotifyBar;
  }

  async permitToNotify() {
    try {
      const messaging = firebase.messaging();
      Notification.requestPermission();
      this.displayToken = await messaging.getToken();
      console.warn('Token: ', this.displayToken);
      this.showPushNotifyBar = !this.showPushNotifyBar;
    } catch (error) {
      console.warn('Unable to get permission to notify. Error: ', error);
    }
  }

  clear() {
    this.popoverService.dismiss();
  }
}
