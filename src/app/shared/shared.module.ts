import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

import { AboutAppComponent } from './about-app/about-app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { TermsComponent } from './terms/terms.component';
import { TicketComponent } from './ticket/ticket.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AboutAppComponent,
    PopoverComponent,
    AboutUsComponent,
    GetStartedComponent,
    TicketComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutAppComponent,
    PopoverComponent,
    AboutUsComponent,
    GetStartedComponent,
    TicketComponent,
    PrivacyComponent,
    TermsComponent
  ]
})
export class SharedModule {}
