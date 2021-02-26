import { Component, Input, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
// import firebase from 'firebase/app';
// import 'firebase/messaging';
import { Router } from '@angular/router';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { PopoverService } from './services/popover.service';
// import { LoginComponent } from './login/login.component';

import { User } from './models/users.model';
import { MessageService } from './services/message.service';
// import { IonicStorageModule } from '@ionic/storage';
import { StorageService } from './services/storage.service';

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
  // @Input() pushReqRes: boolean;
  // response: boolean;

  constructor(
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public modalController: ModalController,
    public authService: AuthService,
    public popoverService: PopoverService,
    private messageService: MessageService,
    private store: StorageService
  ) {
    this.swPush.messages.subscribe((msg) => console.warn('push message: ', msg));
    this.swPush.notificationClicks.subscribe((click) => console.warn('notification click: ', click));
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(environment.firebaseConfig);
    //   navigator.serviceWorker.getRegistration().then(() =>
    //     firebase.messaging().getToken({
    //       vapidKey: 'BFZIBA94F79A9vt1yD4DBZX5BD460KEm3WWdRdzGV-FSBfIgGBoajnRhwWOUeHSEb9cUmIJejFHYlMYfCtVbN3c'
    //     })
    //   );
    // }
  }

  ngOnInit() {
    this.platform.ready().then((readySource) => {
      const source = readySource;
      if (source === 'capacitor') {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      } else {
        this.statusBar.hide();
        this.splashScreen.hide();
      }
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
        return;
      });
    }
  }

  // cancelNotificationBar() {
  //   this.showPushNotifyBar = !this.showPushNotifyBar;
  // }

  // async permitToNotify() {
  //   try {
  //     const messaging = firebase.messaging();
  //     Notification.requestPermission();
  //     this.displayToken = await messaging.getToken();
  //     this.showPushNotifyBar = !this.showPushNotifyBar;
  //   } catch (error) {
  //   }
  // }

  clear() {
    this.popoverService.dismiss();
  }
}
