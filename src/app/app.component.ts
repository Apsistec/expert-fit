import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, Platform, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from './models/users.model';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { PopoverService } from './services/popover.service';
import { UpdateService } from './services/update.service';
import { GetStartedComponent } from './shared/get-started/get-started.component';
import { PopoverComponent } from './shared/popover/popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
//   user: Observable<User>;
  currentRoute;
  showBackButton = false;
  currentURL: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public popoverService: PopoverService,
    private statusBar: StatusBar,
    private checkForUpdate: UpdateService,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private messageService: MessageService,
    public authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    if (this.router.url === '/home' || '/') {
      this.showBackButton = false;
    } else {
      this.showBackButton = true;
    }
    // this.checkForUpdate.checkForUpdateService();

    // try {
    //   await Promise.all([
    //     firebase.firestore().enablePersistence({ synchronizeTabs: true }), // set {synchronizeTabs:true} for resource sharing across tabs
    //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL),
    //   ]);
    //   firebase.analytics();
    // } catch (error) {
    //   console.error('Persistense Failed');
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'user-popover'
    });
    return popover.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalGetStarted() {
    const modal = await this.modalController.create({
      component: GetStartedComponent,
      cssClass: 'modal-css',
      showBackdrop: true,
      backdropDismiss: false
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }
}
