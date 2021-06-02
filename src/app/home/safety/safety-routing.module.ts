import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SafetyPage } from './safety.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafetyPageRoutingModule {}
