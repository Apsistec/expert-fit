import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SafetyPageRoutingModule } from './safety-routing.module';
import { SafetyPage } from './safety.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SafetyPageRoutingModule],
  declarations: [SafetyPage]
})
export class SafetyPageModule {}
