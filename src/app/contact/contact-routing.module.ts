import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactPage } from './contact.page';

import type { Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactPageRoutingModule {}
