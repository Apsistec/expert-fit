import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
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
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedDirectivesModule } from './directives/shared-directives.module';
import { SideMenuComponent } from './home/side-menu/side-menu.component';
import { LoginComponent } from './shared/login/login.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ErrorInterceptor } from './services/error.interceptor';
import { UnknownComponent } from './unknown/unknown.component';

export function firebaseAppNameFactory() {
  return `expert-fit`;
}

@NgModule({
  declarations: [AppComponent, SideMenuComponent, LoginComponent, UnknownComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig, firebaseAppNameFactory, {
      enableFirestoreSync: true, // enable/disable autosync users with firestore
      toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
      // tslint:disable-next-line: max-line-length
      authGuardFallbackURL: '/home', // url for unauthenticated users - to use in combination with canActivate feature on a route
      // tslint:disable-next-line: max-line-length
      authGuardLoggedInURL: '/dashboard', // url for authenticated users - to use in combination with canActivate feature on a route
      passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
      passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
      // Same as password but for the name
      nameMaxLength: 50,
      nameMinLength: 2,
      // If set, sign-in/up form is not available until email has been verified.
      // Plus protected routes are still protected even though user is connected.
      guardProtectedRoutesUntilEmailIsVerified: true,
      enableEmailVerification: true // default: true
    }),
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthGuardModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AppRoutingModule,
    QuicklinkModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedDirectivesModule,
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    DatePipe,
    StatusBar,
    SplashScreen,
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
