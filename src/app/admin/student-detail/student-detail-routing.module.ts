import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDetailPage } from './student-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StudentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDetailPageRoutingModule {}
