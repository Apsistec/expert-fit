import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPage } from './user.page';
import { WebrtcComponent } from './webrtc/webrtc.component';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'webrtc',
        component: WebrtcComponent
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryPageModule)
      },
      {
        path: '',
        redirectTo: '/user/dashboard',
        pathMatch: 'full'
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule {}
