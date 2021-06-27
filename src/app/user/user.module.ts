import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';
import { WebrtcComponent } from './webrtc/webrtc.component';
import { CancelServiceComponent } from './cancel-service/cancel-service.component';
import { CartviewComponent } from './cartview/cartview.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { SupportComponent } from './support/support.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NewsFormComponent } from './news-form/news-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, UserPageRoutingModule],
  declarations: [
    UserPage,
    ProfileComponent,
    UserDashboardComponent,
    SettingsComponent,
    WebrtcComponent,
    CancelServiceComponent,
    CartviewComponent,
    VerifyEmailComponent,
    NewReviewComponent,
    CartviewComponent,
    SupportComponent,
    NewsFormComponent,
    SupportComponent,
  ]
})
export class UserPageModule {}
