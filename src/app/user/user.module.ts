import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
// import { SupportComponent } from '../shared/support/support.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { TicketComponent } from './ticket/ticket.component';
// import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, SharedModule, UserPageRoutingModule],
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
    // SupportComponent,
    NewsFormComponent,
    // SupportComponent,
    TicketComponent,
    // NewsfeedComponent,
    InvoicesComponent,
    UserTicketsComponent,
    CheckoutComponent,
  ]
})
export class UserPageModule {}
