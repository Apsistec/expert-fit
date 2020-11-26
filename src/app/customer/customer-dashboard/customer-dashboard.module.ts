import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerDashboardPageRoutingModule } from './customer-dashboard-routing.module';

import { CustomerDashboardPage } from './customer-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerDashboardPageRoutingModule
  ],
  declarations: [CustomerDashboardPage]
})
export class CustomerDashboardPageModule {}
