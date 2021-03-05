import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricingPage } from './pricing.page';

const routes: Routes = [
  {
    path: '',
    component: PricingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricingPageRoutingModule {}
