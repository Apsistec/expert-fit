/* eslint-disable @typescript-eslint/member-ordering */
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit, AfterViewInit {
  constructor(private reviewService: ReviewService) {}
  overStar: number | undefined;

  slideOpts = {
    speed: 10000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 600
  };

  ratings: any; // Observable<Review[]>;
  @ViewChild('review') review: IonSlides;

  async ngOnInit() {
    this.ratings = await this.reviewService.getAllReviews();
  }
  ngAfterViewInit() {}

  hover(value: any) {
    this.overStar = value;
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
