import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { User } from './models/users.model';
import { AuthService } from './services/auth.service';
import { UpdateService } from './services/update.service';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/app';
// import { PopoverService } from './services/popover.service';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  // providers: [Location]
})
export class AppComponent implements OnInit{

  user: User;
  showBackButton: boolean;
  path;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private checkForUpdate: UpdateService,
    public authService: AuthService,
    // public popoverService: PopoverService,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.checkForUpdate.checkForUpdateService();
  }

  async ngOnInit() {
    // this.path = this.router.url;
    // console.log(this.path);

    // if (this.path !== '/' || 'home') {
    //   this.showBackButton = true;
    // } else {
    //   this.showBackButton = false;
    // }
    // console.log(this.showBackButton);
  }
}
