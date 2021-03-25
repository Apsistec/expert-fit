import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestimonialsPage } from './testimonials.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonialsPageRoutingModule {}
