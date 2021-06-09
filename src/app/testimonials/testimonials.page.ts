import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonSlides, ModalController } from '@ionic/angular';

import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { ReviewService } from '../services/review.service';
import { NewReviewComponent } from '../shared/new-review/new-review.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss']
})
export class TestimonialsPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  max: number;
  formRating;
  overStar: any;
  reviewForm;
  reviews: any;
  myReviews: any;
  segment = 0;
  user;
  review;
  constructor(
    private reviewService: ReviewService,
    public afAuth: AngularFireAuth,
    private modalController: ModalController,
    private messageService: MessageService,
    public authService: AuthService
  ) {}
  track(review) {
    return review ? review.id : undefined;
  }

  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  ngOnInit() {
    this.reviews = this.reviewService.getAllReviews();
  }

  getMyReviews() {
    this.myReviews = this.reviewService.getUserReviews(this.authService.userId);
    console.log('myReviews' + this.myReviews);
  }

  async showModalNewReview() {
    const modal = await this.modalController.create({
      component: NewReviewComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false,
      showBackdrop: true
    });
    modal.present().catch((error) => {
      this.dismissModal();
      return this.messageService.errorAlert(error);
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
