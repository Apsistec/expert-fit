import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Benefits } from 'src/app/models/benefits';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit, AfterViewInit {
  benefits = Benefits;
  @ViewChild('mySlider') slider: IonSlides;

  slideOpts;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.slideOpts = {
      initialSlide: 1,
      speed: 1200,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1
    };
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
