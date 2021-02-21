import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPage } from './checkout/checkout.page';
import { HomePage } from './home.page';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'video', component: IntroVideoComponent
      },
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
      },
      {
        path: 'checkout',
        component: CheckoutPage
      },
      {
        path: '',
        component: LandingPageComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
