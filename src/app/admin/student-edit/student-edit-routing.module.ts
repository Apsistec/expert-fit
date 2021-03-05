import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentEditPage } from './student-edit.page';

const routes: Routes = [
  {
    path: '',
    component: StudentEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentEditPageRoutingModule {}
