import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlinkDirective } from './directives/blink.directive';
import { FadeHeaderDirective } from './directives/fade-header.directive';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { SubmitIfValidDirective } from './directives/submit-if-valid.directive';
import { SafePipe } from './pipes/safe.pipe';
import { ToHttpsPipe } from './pipes/to-https.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, BlinkDirective, FadeHeaderDirective, HideHeaderDirective, SubmitIfValidDirective, SafePipe, ToHttpsPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
