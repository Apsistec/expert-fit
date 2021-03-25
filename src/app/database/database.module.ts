import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DatabasePageRoutingModule } from './database-routing.module';
import { DatabasePage } from './database.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatabasePageRoutingModule
  ],
  declarations: [DatabasePage]
})
export class DatabasePageModule {}
