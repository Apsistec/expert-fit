import { NgModule } from '@angular/core';
import { emailVerified, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
// import { PaidGuard } from './_guards/paid.guard';
// import { RoleGuard } from './_guards/role.guard';
import { HomePage } from './home/home.page';

const redirectLoggedInToDash = () => redirectLoggedInTo(['/customers/dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/home']);
const verifiedEmail = () => emailVerified;

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'faqs',
    loadChildren: () => import('./home/faq/faq.module').then((m) => m.FaqPageModule)
  },

  {
    path: 'testimonials',
    loadChildren: () => import('./home/testimonials/testimonials.module').then((m) => m.TestimonialsPageModule)
  },
  {
    path: 'ratings',
    redirectTo: '/testimonials',
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    loadChildren: () => import('./home/checkout/checkout.module').then((m) => m.CheckoutPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./home/products/products.module').then((m) => m.ProductsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./home/contact/contact.module').then((m) => m.ContactPageModule)
  },
  {
    path: 'unknown',
    loadChildren: () => import('./home/unknown/unknown.module').then((m) => m.UnknownPageModule)
    // ...canActivate(redirectLoggedInToDash)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer-dashboard/customer-dashboard.module').then((m) => m.CustomerDashboardPageModule)
    // ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(verifiedEmail),
    // canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'employees',
    loadChildren: () => import('./employee/employee-dashboard/employee-dashboard.module').then((m) => m.EmployeeDashboardPageModule)
    // ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(verifiedEmail),
    // canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'admins',
    loadChildren: () => import('./admin/admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardPageModule)
    // ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(verifiedEmail),
    // canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'verified-email',
    loadChildren: () => import('./home/verify-email/verify-email.module').then((m) => m.VerifyEmailModule)
  },
  {
    path: 'home',
    component: HomePage
    // ...canActivate(redirectLoggedInToDash)
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
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
