import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { GalleryPageRoutingModule } from './gallery-routing.module';
import { GalleryPage } from './gallery.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GalleryPageRoutingModule, SharedModule],
  declarations: [GalleryPage]
})
export class GalleryPageModule {}
