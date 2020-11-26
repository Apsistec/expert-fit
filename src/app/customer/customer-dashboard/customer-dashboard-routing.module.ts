import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDashboardPage } from './customer-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerDashboardPageRoutingModule {}
