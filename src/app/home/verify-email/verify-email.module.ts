import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { VerifyEmailRoutingModule } from './verify-email-routing.module';
import { VerifyEmailPage } from './verify-email.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, VerifyEmailRoutingModule, SharedModule],
  declarations: [VerifyEmailPage]
})
export class VerifyEmailModule {}
