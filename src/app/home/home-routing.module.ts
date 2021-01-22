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
