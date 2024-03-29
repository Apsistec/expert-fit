import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { SafetyPageRoutingModule } from './safety-routing.module';
import { SafetyPage } from './safety.page';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, IonicModule, SafetyPageRoutingModule],
  declarations: [SafetyPage]
})
export class SafetyPageModule {}
