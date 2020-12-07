import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Ratings } from '../../models/ratings.model';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
})
export class RatingsComponent {
  testimonials = Ratings;
  @ViewChild('ratings') ratings: IonSlides;

  slideOpts = {
    speed: 1300,
    loop: true,
    slidesPerView: 1,
  };

  constructor() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
