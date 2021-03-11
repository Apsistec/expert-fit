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
import { RatingsBannerComponent } from './ratings-banner/ratings-banner.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { BenefitsTrackerComponent } from './benefits-tracker/benefits-tracker.component';
import { BenefitsTrackerResultsComponent } from './benefits-tracker-results/benefits-tracker-results.component';
import { GetDownloadURLPipeModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    GetDownloadURLPipeModule

  ],
  declarations: [
    HomePage,
    HomePageTwoComponent,
    RatingsBannerComponent,
    HomePageThreeComponent,
    HomePageFourComponent,
    IntroVideoComponent,
    LandingPageComponent,
    BenefitsTrackerResultsComponent,
    BenefitsTrackerComponent,
    BenefitsComponent
  ]
})
export class HomePageModule {}
