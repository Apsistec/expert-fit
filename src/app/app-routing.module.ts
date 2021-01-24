import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { PaidGuard } from './guards/paid.guard';
import { RoleGuard } from './guards/role.guard';
import { ModalViewComponent } from './shared/modal-view/modal-view.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import {
  AngularFireAuthGuard,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  emailVerified,
  hasCustomClaim,
  idTokenResult,
  AuthPipe
} from '@angular/fire/auth-guard';

const customerOnly = () => hasCustomClaim('customer');
const employeeOnly = () => hasCustomClaim('employee');
const adminOnly = () => hasCustomClaim('admin');
const redirectLoggedInToDash = () => redirectLoggedInTo(['/dashboard']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/home']);
const verifiedEmail = () => emailVerified;

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    ...canActivate(redirectLoggedInToDash)
  },

  {
    path: 'checkout',
    loadChildren: () => import('./home/checkout/checkout.module').then((m) => m.CheckoutPageModule),
    ...canActivate(redirectLoggedInToDash)
  },
  {
    path: 'customer',
    loadChildren: () =>
    import('./customer/customer.module').then((m) => m.CustomerPageModule),
    ...canActivate(redirectLoggedInToDash),
    ...canActivate(redirectUnauthorizedToHome),
    ...canActivate(verifiedEmail),
    canActivate: [LoggedInGuard, PaidGuard, RoleGuard],
  },
  // {
  //   path: 'gallery',
  //   loadChildren: () => import('./home/gallery/gallery.module').then((m) => m.GalleryPageModule),
  //   ...canActivate(redirectLoggedInToDash)
  // },
  // {
  //   path: 'employee-dashboard',
  //   loadChildren: () =>
  //   import('./employee/employee-dashboard/employee-dashboard.module').then((m) => m.EmployeeDashboardPageModule),
  //   ...canActivate(verifiedEmail),
  //   ...canActivate(redirectUnauthorizedToHome),
  //   ...canActivate(adminOnly),
  //   canActivate: [PaidGuard, LoggedInGuard, RoleGuard]
  // },
  // {
    //   path: 'admin-dashboard',
    //   loadChildren: () =>
    //   import('./admin/admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardPageModule),
    //   ...canActivate(redirectUnauthorizedToHome),
    //   ...canActivate(verifiedEmail),
    //   ...canActivate(adminOnly),
    //   canActivate: [PaidGuard, LoggedInGuard, RoleGuard]
    //   },
    
    {
      path: 'unknown',
      loadChildren: () => import('./home/unknown/unknown.module').then((m) => m.UnknownPageModule),
      ...canActivate(redirectLoggedInToDash)
    },
    {
      path: '**',
      redirectTo: '/unknown',
      pathMatch: 'full'
    }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
