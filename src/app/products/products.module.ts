import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProductsPageRoutingModule, SharedModule, SharedDirectivesModule],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
