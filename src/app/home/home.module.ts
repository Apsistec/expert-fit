import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageFourComponent } from '../home/home-page-four/home-page-four.component';
import { HomePageThreeComponent } from '../home/home-page-three/home-page-three.component';
import { HomePageTwoComponent } from '../home/home-page-two/home-page-two.component';
import { SharedModule } from '../shared/shared.module';
import { BenefitsTrackerComponent } from './benefits-tracker/benefits-tracker.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingComponent } from './pricing/pricing.component';
import { RatingsBannerComponent } from './ratings-banner/ratings-banner.component';

// import { GetDownloadURLPipeModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule

  ],
  declarations: [
    HomePage,
    HomePageTwoComponent,
    RatingsBannerComponent,
    HomePageThreeComponent,
    HomePageFourComponent,
    IntroVideoComponent,
    LandingPageComponent,
    BenefitsTrackerComponent,
    BenefitsComponent,
    PricingComponent
  ]
})
export class HomePageModule {}
