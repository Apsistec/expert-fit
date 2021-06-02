import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { AboutUsPageRoutingModule } from './about-us-routing.module';
import { AboutUsPage } from './about-us.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AboutUsPageRoutingModule, SharedModule],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}
