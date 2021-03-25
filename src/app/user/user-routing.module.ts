import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: '',
        redirectTo: '/user/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: CustomerDashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule {}
