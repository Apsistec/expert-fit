import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { BasicContentComponent } from './basic-content/basic-content.component';
import { PlatinumContentComponent } from './platinum-content/platinum-content.component';
import { PremiumContentComponent } from './premium-content/premium-content.component';
import { CustomerPage } from './customer.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage,
    children: [
      {
        path: 'dashboard',
        component: CustomerDashboardComponent,
      },
      {
        path: 'basic',
        component: BasicContentComponent,
      },
      {
        path: 'premium',
        component: PremiumContentComponent,
      },
      {
        path: 'platinum',
        component: PlatinumContentComponent,
      },
      {
        path: 'videos',
        component: VideosComponent,
      },
      {
        path: 'unknown',
        loadChildren: () => import('../home/unknown/unknown.module').then((m) => m.UnknownPageModule)
      },
      {
        path: '**',
        redirectTo: '/unknown',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
