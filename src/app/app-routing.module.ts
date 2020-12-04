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
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    // ...canActivate(redirectLoggedInToDash)
  },
  {
    path: 'products',
    loadChildren: () => import('./home/products/products.module').then((m) => m.ProductsPageModule)
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
    path: 'about-us',
    loadChildren: () => import('./home/about-us/about-us.module').then((m) => m.AboutUsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./home/contact/contact.module').then((m) => m.ContactPageModule)
  },
  {
    path: 'verified-email',
    loadChildren: () => import('./home/verify-email/verify-email.module').then((m) => m.VerifyEmailModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./home/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule)
  },
  {
    path: 'unknown',
    loadChildren: () => import('./home/unknown/unknown.module').then((m) => m.UnknownPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./home/checkout/checkout.module').then((m) => m.CheckoutPageModule)
  },
  {
    path: 'customer-dashboard',
    loadChildren: () =>
      import('./customer/customer-dashboard/customer-dashboard.module').then((m) => m.CustomerDashboardPageModule)
    // ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(verifiedEmail),
    // canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'employee-dashboard',
    loadChildren: () =>
      import('./employee/employee-dashboard/employee-dashboard.module').then((m) => m.EmployeeDashboardPageModule)
    // ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(verifiedEmail),
    // canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin/admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardPageModule)
    // ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(verifiedEmail),
    // canActivate: [PaidGuard, RoleGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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
