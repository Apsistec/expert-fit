import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, UserPageRoutingModule],
  declarations: [UserPage, ProfileComponent, CustomerDashboardComponent, SettingsComponent]
})
export class UserPageModule {}
