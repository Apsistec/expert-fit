import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentDetailPage } from './student-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StudentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDetailPageRoutingModule {}
