import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnknownPageRoutingModule } from './unknown-routing.module';

import { UnknownPage } from './unknown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnknownPageRoutingModule
  ],
  declarations: [UnknownPage]
})
export class UnknownPageModule {}
