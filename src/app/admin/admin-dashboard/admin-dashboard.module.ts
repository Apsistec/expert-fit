import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { CreateUsersComponent } from '../create-users/create-users.component';
import { DetailUsersComponent } from '../detail-users/detail-users.component';
import { EditUsersComponent } from '../edit-users/edit-users.component';
import { ListUsersComponent } from '../list-users/list-users.component';
import { AdminDashboardPageRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardPage } from './admin-dashboard.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AdminDashboardPageRoutingModule
  ],
  declarations: [
      AdminDashboardPage,
      EditUsersComponent,
      CreateUsersComponent,
      DetailUsersComponent,
      ListUsersComponent
]
})
export class AdminDashboardPageModule {}
