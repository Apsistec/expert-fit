import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit {
  private ngUnsubscribe: Subject<any> = new Subject();

  formRating;
  overStar: number | undefined;
  reviewForm;
  reviews: Observable<any>;
  myReviews: Observable<any>;
  segment: any;
  // user: Observable<any>;
  user;

  constructor(
    private reviewService: ReviewService,
    public afAuth: AngularFireAuth
  ) {
    this.user = this.afAuth.authState.toPromise();

      // (user) => {
    if (this.user === null) {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }
    console.log('userfromtesti: ', this.user);
  }


  ngOnInit() {
      this.reviews = this.reviewService.getAllReviews();
      this.myReviews = this.reviewService.getAllReviews();
    }

  hover(value: number) {
      this.overStar = value;
    }

}
