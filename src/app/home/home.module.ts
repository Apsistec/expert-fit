import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePageTwoComponent } from './home-page-two/home-page-two.component';
import { HomePageThreeComponent } from './home-page-three/home-page-three.component';
import { HomePageFourComponent } from './home-page-four/home-page-four.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SharedModule } from '../shared/shared.module';
import { SharedDirecivesModule } from '../directives/shared-directives.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SharedDirectivesModule,
    HomePageRoutingModule
  ],
  declarations: [
      HomePage,
      HomePageTwoComponent,
      HomePageThreeComponent,
      HomePageFourComponent,
      SideMenuComponent
]
})
export class HomePageModule {}
