import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AboutAppComponent } from './about-app/about-app.component';
import { FooterComponent } from './footer/footer.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HeaderComponent } from './header/header.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TermsComponent } from './terms/terms.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AboutAppComponent,
    PopoverComponent,
    GetStartedComponent,
    TicketComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent
  ],
  imports: [IonicModule, RouterModule.forChild(routes), CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutAppComponent,
    PopoverComponent,
    GetStartedComponent,
    TicketComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent
  ]
})
export class SharedModule {}
