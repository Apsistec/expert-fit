import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Ratings } from '../../models/ratings.model';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
  // providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers

})
export class RatingsComponent {
  rate;
  overStar: number | undefined;
  testimonials = Ratings;
  @ViewChild('ratings') ratings: IonSlides;

  slideOpts = {
    speed: 2500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 680,

  };

  constructor() {
  }

  hoveringOver(value: number): void {
    this.overStar = value;
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
