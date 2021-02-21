import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { PaidGuard } from './guards/paid.guard';
import { RoleGuard } from './guards/role.guard';
import {
  AngularFireAuthGuard,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  emailVerified,
  hasCustomClaim
} from '@angular/fire/auth-guard';
import { UnknownComponent } from './unknown/unknown.component';
import { AboutAppComponent } from './shared/about-app/about-app.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { TermsComponent } from './shared/terms/terms.component';
import { SignupComponent } from './signup/signup.component';
// import { LoginGuard } from './guards/login.guard';
import { PhotoGalleryComponent } from './shared/photo-gallery/photo-gallery.component';
import { ModalViewComponent } from './modal-view/modal-view.component';

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

  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerPageModule),
    ...canActivate(redirectUnauthorizedToHome),
    ...canActivate(verifiedEmail),
    canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeePageModule),
    ...canActivate(verifiedEmail),
    ...canActivate(redirectUnauthorizedToHome),
    ...canActivate(adminOnly),
    canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminPageModule),
    ...canActivate(redirectUnauthorizedToHome),
    // ...canActivate(verifiedEmail),
    ...canActivate(adminOnly),
    canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./home/checkout/checkout.module').then((m) => m.CheckoutPageModule)
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
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserPageModule),
    ...canActivate(redirectUnauthorizedToHome),
    ...canActivate(verifiedEmail),
    canActivate: []
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
      // enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
