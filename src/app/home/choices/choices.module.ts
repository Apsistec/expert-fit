import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChoicesPageRoutingModule } from './choices-routing.module';
import { ChoicesPage } from './choices.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ChoicesPageRoutingModule],
  declarations: [ChoicesPage]
})
export class ChoicesPageModule {}
