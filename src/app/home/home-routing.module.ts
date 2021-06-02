import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'products',
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
        path: 'modal-view',
        loadChildren: () => import('./modal-view/modal-view.module').then((m) => m.ModalViewPageModule)
      },
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
        path: '',
        component: LandingPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
