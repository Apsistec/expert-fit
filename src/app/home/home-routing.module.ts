import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PrivacyComponent } from '../shared/privacy/privacy.component';
import { TermsComponent } from '../shared/terms/terms.component';
import { VideoComponent } from '../shared/intro-video/intro-video.component';
import { AboutAppComponent } from '../shared/about-app/about-app.component';
import { LoginComponent } from '../shared/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'about-app',
        component: AboutAppComponent,
      },
      {
        path: 'terms',
        component: TermsComponent,
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
      },
      {
        path: 'video',
        component: VideoComponent,
      },
      { path: 'login', component: LoginComponent },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then((m) => m.ProductsPageModule),
        // ...canActivate(redirectLoggedInToDash)
      },
      {
        path: 'faqs',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqPageModule),
        // ...canActivate(redirectLoggedInToDash)
      },
      {
        path: 'testimonials',
        loadChildren: () => import('./testimonials/testimonials.module').then((m) => m.TestimonialsPageModule),
        // ...canActivate(redirectLoggedInToDash)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then((m) => m.AboutUsPageModule),
        // ...canActivate(redirectLoggedInToDash)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact/contact.module').then((m) => m.ContactPageModule),
        // ...canActivate(redirectLoggedInToDash)
      },
      // {
      //   path: 'unknown',
      //   loadChildren: () => import('../home/unknown/unknown.module').then((m) => m.UnknownPageModule)
      // },
      // {
      //   path: '**',
      //   redirectTo: '/unknown',
      //   pathMatch: 'full'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
