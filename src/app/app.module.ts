import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { QuicklinkModule } from 'ngx-quicklink';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedDirectivesModule } from './directives/shared-directives.module';
import { SideMenuComponent } from './home/side-menu/side-menu.component';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { LoginComponent } from './shared/login/login.component';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  {
    scopes: [
      'public_profile',
      'email',
      'user_likes',
      'user_friends'
    ],
    customParameters: {
      'auth_type': 'reauthenticate'
    },
    provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
  },
  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  firebase.auth.GithubAuthProvider.PROVIDER_ID,
  {
    requireDisplayName: false,
    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
  },
  firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
],
  tosUrl: 'https://expert-fitness-midland-tx.web.app/terms',
  privacyPolicyUrl: 'https://expert-fitness-midland-tx.web.app/privacy',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
  signInSuccessUrl: 'https://expert-fitness-midland-tx.web.app/dashboard'
};




@NgModule({
  declarations: [AppComponent, SideMenuComponent, LoginComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthGuardModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AppRoutingModule,
    QuicklinkModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ShareButtonsModule,
    ShareIconsModule,
    SharedDirectivesModule,
  ],
  providers: [
    DatePipe,
    StatusBar,
    SplashScreen,
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
