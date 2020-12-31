import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Ratings } from '../../models/ratings.model';
import { SeoService } from '../../services/seo.service';
// import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
  // providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers

})
export class RatingsComponent {
  testimonials = Ratings;
  @ViewChild('ratings') ratings: IonSlides;

  slideOpts = {
    speed: 2500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 680,

  };

  // constructor(config: NgbRatingConfig) {
  //   config.max = 5;
  //   config.readonly = true;
  // }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
