import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerifyEmailPage } from './verify-email.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyEmailRoutingModule {}
