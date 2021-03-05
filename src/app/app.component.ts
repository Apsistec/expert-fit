import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { PopoverService } from './services/popover.service';
import { User } from './models/users.model';
import { ScrollService } from './services/scroll.service';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public authService: AuthService,
    public popoverService: PopoverService,
    public scrollService: ScrollService,
    private _location: Location,
    public alertController: AlertController
  ) {
    this.swPush.messages.subscribe((msg) => console.warn('push message: ', msg));
    this.swPush.notificationClicks.subscribe((click) => console.warn('notification click: ', click));
  }

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      const source = readySource;
      console.log('source: ' + source);
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

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/home')) {
        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {
        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController
        .getTop()
        .then((r) => {
          if (r) {
            navigator['app'].exitApp();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }

  showExitConfirm() {
    this.alertController
      .create({
        header: 'App termination',
        message: 'Do you want to close the app?',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Stay',
            role: 'cancel',
            handler: () => {
              console.log('Application exit prevented!');
            }
          },
          {
            text: 'Exit',
            handler: () => {
              navigator['app'].exitApp();
            }
          }
        ]
      })
      .then((alert) => {
        alert.present();
      });
  }

  clear() {
    this.popoverService.dismiss();
  }
}
