import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, UserPageRoutingModule],
  declarations: [
    UserPage,
    ProfileComponent,
    CustomerDashboardComponent,
    SettingsComponent,
    OrderConfirmationComponent,
    ShoppingCartComponent
  ]
})
export class UserPageModule {}
