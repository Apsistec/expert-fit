import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { UnknownPageRoutingModule } from './unknown-routing.module';
import { UnknownPage } from './unknown.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnknownPageRoutingModule,
    SharedModule
  ],
  declarations: [UnknownPage]
})
export class UnknownPageModule {}
