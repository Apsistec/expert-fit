import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { Review } from 'src/app/models/reviews.model';
import { Observable, Subject } from 'rxjs';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit {
  private ngUnsubscribe: Subject<any> = new Subject();

  isReadonly = true;
  formRating;
  overStar: number | undefined;
  reviewForm;
  user: User;
  reviews: Observable<any>;
  myReviews: Observable<any>;
  segment: string;

  constructor(
    public modalController: ModalController,
    public authService: AuthService,
    private reviewService: ReviewService
  ) {  }

  ngOnInit() {
    this.reviews = this.reviewService.getAllReviews();
    this.myReviews = this.reviewService.getUserReviews();
  }

  hover(value: number): void {
    this.overStar = value;
  }

}
