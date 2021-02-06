import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerPage } from './customer.page';
import { CancelServiceComponent } from './cancel-service/cancel-service.component';
import { BasicContentComponent } from './basic-content/basic-content.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PremiumContentComponent } from './premium-content/premium-content.component';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { VideosComponent } from './videos/videos.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { PlatinumContentComponent } from './platinum-content/platinum-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerRoutingModule,
    SharedModule,
    SharedDirectivesModule,
  ],
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
