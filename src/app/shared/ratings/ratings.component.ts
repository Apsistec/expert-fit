import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Ratings } from '../../models/ratings.model';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
})
export class RatingsComponent {

  @ViewChild('ratingsSlider') slider: IonSlides;

  slideOpts = {
    speed: 1300,
    loop: true,
    slidesPerView: 1,
  };
  ratings = Ratings;

  constructor() {}


  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}