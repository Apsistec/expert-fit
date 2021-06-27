import { Subscription } from 'rxjs';

import { Location } from '@angular/common';
import { Component, Input, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController, Platform } from '@ionic/angular';

import { AuthService } from './services/auth.service';
import { PopoverService } from './services/popover.service';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() choice;
  darkSetting;

  subs: Subscription = new Subscription();

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
        return false;
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

  ngAfterViewInit() {
    this.darkSetting = window.matchMedia('(prefers-color-scheme: dark)');
    if (this.darkSetting.matches === true) {
      document.body.classList.toggle('dark');
    }
  }

  clear() {
    this.popoverService.dismiss();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
