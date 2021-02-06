import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EmployeePageRoutingModule, SharedModule],
  declarations: [EmployeePage, EmployeeDashboardComponent]
})
export class EmployeePageModule {}
