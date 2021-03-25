import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { TestimonialsPageRoutingModule } from './testimonials-routing.module';
import { TestimonialsPage } from './testimonials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TestimonialsPageRoutingModule,
    SharedModule
  ],
  declarations: [TestimonialsPage]
})
export class TestimonialsPageModule {}
