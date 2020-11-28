import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerDashboardPageRoutingModule } from './customer-dashboard-routing.module';

import { CustomerDashboardPage } from './customer-dashboard.page';
import { CancelServiceComponent } from '../cancel-service/cancel-service.component';
import { BasicContentComponent } from '../basic-content/basic-content.component';
import { InvoicesComponent } from '../invoices/invoices.component';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
import { NutritionComponent } from '../nutrition/nutrition.component';
import { ProfileComponent } from '../profile/profile.component';
import { PremiumContentComponent } from '../premium-content/premium-content.component';
import { UserTicketsComponent } from '../user-tickets/user-tickets.component';
import { SettingsComponent } from '../settings/settings.component';
import { VideosComponent } from '../videos/videos.component';
import { WorkoutsComponent } from '../workouts/workouts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CustomerDashboardPageRoutingModule
  ],
  declarations: [
      CustomerDashboardPage,
      BasicContentComponent,
      CancelServiceComponent,
      InvoicesComponent,
      NewsfeedComponent,
      NutritionComponent,
      PremiumContentComponent,
      ProfileComponent,
      SettingsComponent,
      UserTicketsComponent,
      VideosComponent,
      WorkoutsComponent
]
})
export class CustomerDashboardPageModule {}
