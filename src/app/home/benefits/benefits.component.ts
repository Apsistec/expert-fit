/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage, GetDownloadURLPipe } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Benefit } from 'src/app/models/benefits.model';
import { BenefitsService } from 'src/app/services/benefits.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  benefits: Observable<Benefit[]>;
  @ViewChild('slider') slider: IonSlides;

  slideOpts = {
    initialSlide: 1,
    speed: 1200,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 400
  };

  constructor(private benefitsService: BenefitsService) {}

  async ngOnInit() {
    this.benefits = await this.benefitsService.getBenefits();
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  //Move to Next slide
  slideNext(slides) {
    slides.slideNext(500);
  }

  //Move to previous slide
  slidePrev(slides) {
    slides.slidePrev(500);
  }
}
