import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDashboardPage } from './employee-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDashboardPageRoutingModule {}
