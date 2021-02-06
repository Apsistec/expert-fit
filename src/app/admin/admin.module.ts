import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { SharedModule } from '../shared/shared.module';
import { CreateUsersComponent } from './create-users/create-users.component';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    AdminPage,
    AdminDashboardComponent,
    EditUsersComponent,
    CreateUsersComponent,
    DetailUsersComponent,
    ListUsersComponent
  ]
})
export class AdminPageModule {}
