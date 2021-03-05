import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentCreatePage } from './student-create.page';

const routes: Routes = [
  {
    path: '',
    component: StudentCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentCreatePageRoutingModule {}
