import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { HomePageRoutingModule } from './home-routing.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { HomePageTwoComponent } from '../home/home-page-two/home-page-two.component';
import { HomePageThreeComponent } from '../home/home-page-three/home-page-three.component';
import { HomePageFourComponent } from '../home/home-page-four/home-page-four.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    SharedDirectivesModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
  declarations: [
    HomePage,
    HomePageFourComponent,
    HomePageTwoComponent,
    HomePageThreeComponent,
  ]
})
export class HomePageModule {}
