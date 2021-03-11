import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';
import { Review } from 'src/app/models/reviews.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss']
})
export class TestimonialsPage implements OnInit {
  private ngUnsubscribe: Subject<any> = new Subject();
  max: number;
  formRating;
  readonly: any;
  overStar: any;
  reviewForm;
  reviews: any; //  Observable<Review>;
  myReviews: any; // : Observable<any>;
  segment: any = 'default';
  user;

  constructor(private reviewService: ReviewService, public afAuth: AngularFireAuth) {

  }

  ngOnInit() {
    return this.reviewService.getAllReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  getUserReviews(){
    // this.user = this.afAuth.authState.toPromise();

  }
  // hover(value: number) {
  //     this.overStar = value;
  //   }
}
