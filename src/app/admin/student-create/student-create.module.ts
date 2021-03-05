import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentCreatePageRoutingModule } from './student-create-routing.module';

import { StudentCreatePage } from './student-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentCreatePageRoutingModule
  ],
  declarations: [StudentCreatePage]
})
export class StudentCreatePageModule {}
