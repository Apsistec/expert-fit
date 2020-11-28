import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Rating } from '../../models/ratings.model';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit {

  @ViewChild('ratingsSlider') slider: IonSlides;

  slideOpts = {
    speed: 400,
    loop: true,
    slidesPerView: 1,
  };
  ratings: Rating;

  constructor() {}

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
