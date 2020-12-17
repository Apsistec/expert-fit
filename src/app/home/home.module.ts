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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    SharedDirectivesModule,
  ],
  declarations: [
    HomePage,
    HomePageTwoComponent,
    HomePageThreeComponent,
  ]
})
export class HomePageModule {}
