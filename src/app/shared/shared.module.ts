import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AboutAppComponent } from './about-app/about-app.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FooterComponent } from './footer/footer.component';
// import { PopoverComponent } from './popover/popover.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TermsComponent } from './terms/terms.component';
import { TicketComponent } from './ticket/ticket.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { BarRatingModule } from 'ngx-bar-rating';

const routes: Routes = [];

@NgModule({
  declarations: [
    FooterComponent,
    AboutAppComponent,
    // PopoverComponent,
    TicketComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent,
    BenefitsComponent,
    ModalViewComponent,
  ],
  providers: [DatePipe],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule

  ],
  exports: [
    FooterComponent,
    AboutAppComponent,
    // PopoverComponent,
    TicketComponent,
    PrivacyComponent,
    TermsComponent,
    RatingsComponent,
    BenefitsComponent,
    ModalViewComponent,
    BarRatingModule
  ]
})
export class SharedModule {}
