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
import { UnknownComponent } from './unknown/unknown.component';
import { AboutAppComponent } from './shared/about-app/about-app.component';
import { LoginComponent } from './shared/login/login.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { TermsComponent } from './shared/terms/terms.component';

const customerOnly = () => hasCustomClaim('customer');
const employeeOnly = () => hasCustomClaim('employee');
const adminOnly = () => hasCustomClaim('admin');
const redirectLoggedInToDash = () => redirectLoggedInTo(['/user/dashboard']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/home']);
const verifiedEmail = () => emailVerified;

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    ...canActivate(redirectLoggedInToDash)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerPageModule),
    ...canActivate(redirectLoggedInToDash),
    ...canActivate(redirectUnauthorizedToHome),
    ...canActivate(verifiedEmail),
    canActivate: [LoggedInGuard, PaidGuard, RoleGuard]
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeePageModule),
    ...canActivate(verifiedEmail),
    ...canActivate(redirectUnauthorizedToHome),
    ...canActivate(adminOnly),
    canActivate: [PaidGuard, LoggedInGuard, RoleGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminPageModule),
    ...canActivate(redirectUnauthorizedToHome),
    ...canActivate(verifiedEmail),
    ...canActivate(adminOnly),
    canActivate: [PaidGuard, LoggedInGuard, RoleGuard]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./home/checkout/checkout.module').then((m) => m.CheckoutPageModule),
  },
  {
    path: 'gallery',
    loadChildren: () => import('./home/gallery/gallery.module').then((m) => m.GalleryPageModule),
  },
  {
    path: 'about-app',
    component: AboutAppComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'gallery',
    loadChildren: () => import('./home/gallery/gallery.module').then((m) => m.GalleryPageModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: UnknownComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      // scrollPositionRestoration: 'enabled',
      // anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
