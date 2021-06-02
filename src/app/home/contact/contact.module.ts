import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, IonicModule, ContactPageRoutingModule],
  declarations: [ContactPage]
})
export class ContactPageModule {}
