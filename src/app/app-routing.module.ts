import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'customer-dashboard',
    loadChildren: () => import('./customer/customer-dashboard/customer-dashboard.module').then( m => m.CustomerDashboardPageModule)
  },
  {
    path: 'employee-dashboard',
    loadChildren: () => import('./employee/employee-dashboard/employee-dashboard.module').then( m => m.EmployeeDashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
