import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, Platform, PopoverController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { PopoverService } from './services/popover.service';
import { UpdateService } from './services/update.service';
import { PopoverComponent } from './shared/popover/popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  currentRoute;
  showBackButton = false;
  currentURL: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public popoverService: PopoverService,
    private statusBar: StatusBar,
    private checkForUpdate: UpdateService,
    public authService: AuthService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


    // this.checkForUpdate.checkForUpdateService();

    // try {
    //   await Promise.all([
    //     firebase.firestore().enablePersistence({ synchronizeTabs: true }),
    // set {synchronizeTabs:true} for resource sharing across tabs
    //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL),
    //   ]);
    //   firebase.analytics();
    // } catch (error) {
    //   console.error('Persistense Failed');
  // }


}
