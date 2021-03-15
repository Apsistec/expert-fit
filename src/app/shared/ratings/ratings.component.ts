/* eslint-disable @typescript-eslint/member-ordering */
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { Review } from 'src/app/models/reviews.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit, AfterViewInit {
  constructor(private reviewService: ReviewService) {}
  overStar: number | undefined;

  slideOpts = {
    speed: 5000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 600
  };

  ratings: Observable<Review[]>;

  async ngOnInit() {
    this.ratings = await this.reviewService.getAllReviews();
  }
  @ViewChild('review') review: IonSlides;
  ngAfterViewInit() {}

  hover(value: any) {
    this.overStar = value;
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
