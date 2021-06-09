import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, UserPageRoutingModule],
  declarations: [UserPage, ProfileComponent, CustomerDashboardComponent, SettingsComponent]
})
export class UserPageModule {}
