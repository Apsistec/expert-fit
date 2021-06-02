import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { SharedModule } from '../shared/shared.module';
import { BasicContentComponent } from './basic-content/basic-content.component';
import { CancelServiceComponent } from './cancel-service/cancel-service.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerPage } from './customer.page';
import { InvoicesComponent } from './invoices/invoices.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PlatinumContentComponent } from './platinum-content/platinum-content.component';
import { PremiumContentComponent } from './premium-content/premium-content.component';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { VideosComponent } from './videos/videos.component';
import { WorkoutsComponent } from './workouts/workouts.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CustomerRoutingModule, SharedModule, SharedDirectivesModule],
  declarations: [
    CustomerPage,
    BasicContentComponent,
    CancelServiceComponent,
    InvoicesComponent,
    NewsfeedComponent,
    NutritionComponent,
    PremiumContentComponent,
    UserTicketsComponent,
    VideosComponent,
    WorkoutsComponent,
    PlatinumContentComponent
  ]
})
export class CustomerPageModule {}
