import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { TestimonialsPageRoutingModule } from './testimonials-routing.module';
import { TestimonialsPage } from './testimonials.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimonialsPageRoutingModule,
    SharedModule
  ],
  declarations: [TestimonialsPage]
})
export class TestimonialsPageModule {}
