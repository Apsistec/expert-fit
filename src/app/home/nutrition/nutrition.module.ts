import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NutritionPageRoutingModule } from './nutrition-routing.module';
import { NutritionPage } from './nutrition.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NutritionPageRoutingModule],
  declarations: [NutritionPage]
})
export class NutritionPageModule {}
