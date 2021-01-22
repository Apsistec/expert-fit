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
import { VideoComponent } from './intro-video/intro-video.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    VideoComponent,
  ],
  providers: [DatePipe],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
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
    VideoComponent,
    NgbModule
  ]
})
export class SharedModule {}
