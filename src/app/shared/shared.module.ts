import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AboutAppComponent } from './about-app/about-app.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FooterComponent } from './footer/footer.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TermsComponent } from './terms/terms.component';
import { TicketComponent } from './ticket/ticket.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { ReviewComponent } from './review/review.component';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { AuthenticateComponent } from './authenticate/authenticate.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    FooterComponent,
    AboutAppComponent,
    PopoverComponent,
    ReviewComponent,
    TicketComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent,
    BenefitsComponent,
    ModalViewComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    // AuthenticateComponent
  ],
  providers: [DatePipe],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    SharedDirectivesModule,
    MaterialModule,
  ],
  exports: [
    FooterComponent,
    AboutAppComponent,
    PopoverComponent,
    ReviewComponent,
    SharedDirectivesModule,
    TicketComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent,
    BenefitsComponent,
    ModalViewComponent,
    BarRatingModule,
    MaterialModule,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    // AuthenticateComponent
  ]
})
export class SharedModule {}
