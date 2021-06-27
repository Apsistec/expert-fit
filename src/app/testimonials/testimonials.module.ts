import { NgScrollbarModule } from 'ngx-scrollbar';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { TestimonialsPageRoutingModule } from './testimonials-routing.module';
import { TestimonialsPage } from './testimonials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    IonicModule,
    TestimonialsPageRoutingModule,
    SharedModule
  ],
  declarations: [TestimonialsPage],
  providers: []
})
export class TestimonialsPageModule {}
