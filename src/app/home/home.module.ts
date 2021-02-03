import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePageTwoComponent } from '../home/home-page-two/home-page-two.component';
import { HomePageThreeComponent } from '../home/home-page-three/home-page-three.component';
import { HomePageFourComponent } from '../home/home-page-four/home-page-four.component';
import { BenefitTrackerComponent } from './benefit-tracker/benefit-tracker.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    SharedDirectivesModule,
    NgxPageScrollCoreModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [
    HomePage,
    HomePageTwoComponent,
    HomePageThreeComponent,
    HomePageFourComponent,
    BenefitTrackerComponent,
    IntroVideoComponent,
    LandingPageComponent
  ]
})
export class HomePageModule {}
