import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: 'dashboard',
        component: CustomerDashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule {}
