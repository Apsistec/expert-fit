import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      { path: '', redirectTo: 'student-list', pathMatch: 'full' },
      {
        path: 'student-create',
        loadChildren: () => import('./student-create/student-create.module').then((m) => m.StudentCreatePageModule)
      },
      {
        path: 'student-edit/:id',
        loadChildren: () => import('./student-edit/student-edit.module').then((m) => m.StudentEditPageModule)
      },
      {
        path: 'student-list',
        loadChildren: () => import('./student-list/student-list.module').then((m) => m.StudentListPageModule)
      },
      {
        path: 'student-detail',
        loadChildren: () => import('./student-detail/student-detail.module').then((m) => m.StudentDetailPageModule)
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {}
