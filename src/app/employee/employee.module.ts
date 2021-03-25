import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeePageRoutingModule } from './employee-routing.module';
import { EmployeePage } from './employee.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EmployeePageRoutingModule, SharedModule],
  declarations: [EmployeePage, EmployeeDashboardComponent]
})
export class EmployeePageModule {}
