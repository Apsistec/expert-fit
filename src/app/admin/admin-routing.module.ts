import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminPage } from './admin.page';
import { CreateUsersComponent } from './create-users/create-users.component';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:
    [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'create-users',
        component: CreateUsersComponent
      },
      {
        path: 'list-users',
        component: ListUsersComponent
      },
      {
        path: 'edit-users',
        component: EditUsersComponent
      },
      {
        path: 'detail-users',
        component: DetailUsersComponent
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
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
