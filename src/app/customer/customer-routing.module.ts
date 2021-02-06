import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
