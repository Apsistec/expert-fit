import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentListPage } from './student-list.page';

const routes: Routes = [
  {
    path: '',
    component: StudentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentListPageRoutingModule {}
