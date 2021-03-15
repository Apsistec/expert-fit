import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { PaidGuard } from './guards/paid.guard';
import { RoleGuard } from './guards/role.guard';
import {
  // AngularFireAuthGuard,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  emailVerified,
  hasCustomClaim
} from '@angular/fire/auth-guard';
import { UnknownComponent } from './shared/unknown/unknown.component';
import { PhotoGalleryComponent } from './shared/photo-gallery/photo-gallery.component';
import { ModalViewComponent } from './shared/modal-view/modal-view.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
// import { LoginGuard } from './guards/login.guard';

const customerOnly = () => hasCustomClaim('customer');
const employeeOnly = () => hasCustomClaim('employee');
const adminOnly = () => hasCustomClaim('admin');
const redirectLoggedInToDash = () => redirectLoggedInTo(['/user/dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const verifiedEmail = () => emailVerified;
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
    ...canActivate(verifiedEmail),
    ...canActivate(customerOnly || adminOnly || employeeOnly),
    canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
    ...canActivate(employeeOnly || adminOnly),
    canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
    ...canActivate(adminOnly),
    canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'gallery',
    loadChildren: () => import('./home/gallery/gallery.module').then((m) => m.GalleryPageModule)
  },
  {
    path: ':id',
    component: ModalViewComponent
  },
  {
    path: 'gallery',
    loadChildren: () => import('./home/gallery/gallery.module').then((m) => m.GalleryPageModule)
  },
  {
    path: 'photo-gallery',
    component: PhotoGalleryComponent
  },
  {
    path: 'database',
    loadChildren: () => import('./database/database.module').then((m) => m.DatabasePageModule)
  },
  {
    path: 'line-chart',
    component: LineChartComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '**',
    component: UnknownComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy
      // scrollPositionRestoration: 'enabled',
      // anchorScrolling: 'enabled'
      // enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
