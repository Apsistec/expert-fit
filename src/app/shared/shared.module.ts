import { BarRatingModule } from 'ngx-bar-rating';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AboutAppComponent } from './about-app/about-app.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { PhoneAuthComponent } from './phone-auth/phone-auth.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SignupComponent } from './signup/signup.component';
import { TermsComponent } from './terms/terms.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SharedDirectivesModule } from './directives/shared-directives.module';

const routes: Routes = [];

@NgModule({
  declarations: [
    FooterComponent,
    PhoneAuthComponent,
    AboutAppComponent,
    PopoverComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LocationComponent,
    MapComponent,
    ToggleComponent,

  ],
  providers: [],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    CommonModule,



    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    GoogleMapsModule,
    SharedDirectivesModule,

  ],
  exports: [
    SharedDirectivesModule,
    FooterComponent,
    LocationComponent,
    BarRatingModule,
    GoogleMapsModule,
    ToggleComponent,
    AboutAppComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent,

  ]
})
export class SharedModule {}
