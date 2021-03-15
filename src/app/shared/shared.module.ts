import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AboutAppComponent } from './about-app/about-app.component';
import { FooterComponent } from './footer/footer.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TermsComponent } from './terms/terms.component';
import { TicketComponent } from './ticket/ticket.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { NewReviewComponent } from './new-review/new-review.component';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VerifyEmailComponent } from '../user/verify-email/verify-email.component';
import { PhoneAuthComponent } from './phone-auth/phone-auth.component';
import { UnknownComponent } from './unknown/unknown.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { LocationComponent } from './location/location.component';
import { MapComponent } from './map/map.component';

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
    MapComponent
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
    SharedDirectivesModule
  ],
  exports: [
    FooterComponent,
    PhoneAuthComponent,
    AboutAppComponent,
    PopoverComponent,
    NewReviewComponent,
    SharedDirectivesModule,
    TicketComponent,
    PrivacyComponent,
    ImageCropperModule,
    TermsComponent,
    RatingsComponent,
    BarRatingModule,
    PhotosListComponent,
    PhotoUploadComponent,
    PhotoGalleryComponent,
    UnknownComponent,
    ImageUploadComponent,
    ModalViewComponent,
    LocationComponent,
    MapComponent
  ]
})
export class SharedModule {}
