import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePageTwoComponent } from '../home/home-page-two/home-page-two.component';
import { HomePageThreeComponent } from '../home/home-page-three/home-page-three.component';
import { HomePageFourComponent } from '../home/home-page-four/home-page-four.component';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UnknownComponent } from './unknown/unknown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,

  ],
  declarations: [
    HomePage,
    HomePageTwoComponent,
    HomePageThreeComponent,
    HomePageFourComponent,
    IntroVideoComponent,
    LandingPageComponent,
    UnknownComponent
  ]
})
export class HomePageModule {}
