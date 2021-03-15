import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
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
      {
        path: 'contact-us',
        loadChildren: () => import('./contact/contact.module').then((m) => m.ContactPageModule)
      },
      {
        path: 'contact',
        redirectTo: 'contact-us',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
