import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { ReviewService } from 'src/app/services/review.service';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit, AfterViewInit {
  private ngUnsubscribe: Subject<any> = new Subject();
  overStar: number | undefined;
  ratings: Observable<any>;
  @ViewChild('review') review: IonSlides;

  slideOpts = {
    speed: 2500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 680
  };

  constructor(
    private reviewService: ReviewService,
  ) {}

  ngOnInit() {
    this.ratings = this.reviewService.getAllReviews();
  } 
   ngAfterViewInit() {
    this.ratings = this.reviewService.getAllReviews();
  }

  hover(value: any) {
    this.overStar = value;
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
