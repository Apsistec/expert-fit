import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalViewPageRoutingModule } from './modal-view-routing.module';
import { ModalViewPage } from './modal-view.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ModalViewPageRoutingModule],
  declarations: [ModalViewPage]
})
export class ModalViewPageModule {}
