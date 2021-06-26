import { QuicklinkStrategy } from 'ngx-quicklink';

import { NgModule } from '@angular/core';
import {
    AngularFireAuthGuard, canActivate, emailVerified, redirectLoggedInTo, redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { PaidGuard } from './guards/paid.guard';
import { RoleGuard } from './guards/role.guard';
// import { PhotoGalleryComponent } from './shared/photo-gallery/photo-gallery.component';
import { UnknownComponent } from './shared/unknown/unknown.component';
import { WebrtcComponent } from './shared/webrtc/webrtc.component';

// import { LoginGuard } from './guards/login.guard';

// const customerOnly = () => hasCustomClaim('customer');
// const employeeOnly = () => hasCustomClaim('employee');
// const adminOnly = () => hasCustomClaim('admin');
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
    // ...canActivate(customerOnly || adminOnly || employeeOnly),
    canActivate: [PaidGuard, RoleGuard, AngularFireAuthGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(employeeOnly || adminOnly),
    canActivate: [PaidGuard, RoleGuard, AngularFireAuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(adminOnly),
    canActivate: [PaidGuard, RoleGuard, AngularFireAuthGuard]
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'pricing',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqPageModule)
  },
  {
    path: 'faq',
    redirectTo: 'faqs',
    pathMatch: 'full'
  },
  {
    path: 'webrtc', component: WebrtcComponent, canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'reviews',
    loadChildren: () => import('./testimonials/testimonials.module').then((m) => m.TestimonialsPageModule)
  },
  {
    path: 'testimonials',
    redirectTo: 'reviews',
    pathMatch: 'full'
  },
  {
    path: 'ratings',
    redirectTo: 'reviews',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then((m) => m.AboutUsPageModule)
  },
  {
    path: 'about',
    redirectTo: 'about-us',
    pathMatch: 'full'
  },
  // {
  //   path: 'modal-view',
  //   loadChildren: () =>
  //     import('./modal-view/modal-view.module').then(
  //       m => m.ModalViewPageModule,
  //     ),
  // },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactPageModule)
  },
  {
    path: 'contact',
    redirectTo: 'contact-us',
    pathMatch: 'full'
  },
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then((m) => m.FacilityPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then((m) => m.NutritionPageModule)
  },
  {
    path: 'safety',
    loadChildren: () => import('./safety/safety.module').then((m) => m.SafetyPageModule)
  },
  {
    path: 'choices',
    loadChildren: () => import('./choices/choices.module').then((m) => m.ChoicesPageModule)
  },

  {
    path: ':id',
    loadChildren: () => import('./modal-view/modal-view.module').then((m) => m.ModalViewPageModule)
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
