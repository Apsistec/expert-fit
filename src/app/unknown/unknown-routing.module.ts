import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnknownPage } from './unknown.page';

const routes: Routes = [
  {
    path: '',
    component: UnknownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnknownPageRoutingModule {}
