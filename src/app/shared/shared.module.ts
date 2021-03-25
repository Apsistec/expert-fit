import { BarRatingModule } from 'ngx-bar-rating';
import { ImageCropperModule } from 'ngx-image-cropper';

import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { VerifyEmailComponent } from '../user/verify-email/verify-email.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { AuthPopoverComponent } from './auth-popover/auth-popover.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { PhoneAuthComponent } from './phone-auth/phone-auth.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SignupComponent } from './signup/signup.component';
import { StripeCheckoutComponent } from './stripe-checkout/stripe-checkout.component';
import { TermsComponent } from './terms/terms.component';
import { TicketComponent } from './ticket/ticket.component';
import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    FooterComponent,
    PhoneAuthComponent,
    AboutAppComponent,
    PopoverComponent,
    NewReviewComponent,
    TicketComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent,
    PhotosListComponent,
    PhotoUploadComponent,
    PhotoGalleryComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UnknownComponent,
    ImageUploadComponent,
    ModalViewComponent,
    LocationComponent,
    MapComponent,
    NewsFormComponent,
    StripeCheckoutComponent,
    AuthPopoverComponent
  ],
  providers: [DatePipe],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    CommonModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    SharedDirectivesModule,
  ],
  exports: [
    FooterComponent,
    StripeCheckoutComponent,
    TicketComponent,
    NewReviewComponent,
    LocationComponent,
    BarRatingModule,
    UnknownComponent,
    // PhoneAuthComponent,
    // AboutAppComponent,
    // PopoverComponent,
    // SharedDirectivesModule,
    // PrivacyComponent,
    // ImageCropperModule,
    // TermsComponent,
    // RatingsComponent,
    // PhotosListComponent,
    // PhotoUploadComponent,
    // PhotoGalleryComponent,
    // ImageUploadComponent,
    // MapComponent,
    // NewsFormComponent,
  ]
})
export class SharedModule {}
