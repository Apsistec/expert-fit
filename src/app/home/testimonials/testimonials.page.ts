import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';

import { MessageService } from '../../services/message.service';
import { ReviewService } from '../../services/review.service';
import { NewReviewComponent } from '../../shared/new-review/new-review.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss']
})
export class TestimonialsPage implements OnInit {
  max: number;
  formRating;
  readonly: any;
  overStar: any;
  reviewForm;
  reviews: any; //  Observable<Review>;
  myReviews: any; // : Observable<any>;
  segmentModel = 'all';
  user;

  constructor(
    private reviewService: ReviewService,
    public afAuth: AngularFireAuth,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.reviews = this.reviewService.getAllReviews();
  }

  getMyReviews(){
    this.myReviews = this.reviewService.getUserReviews(this.user.uid);
    console.log('myReviews' + this.myReviews);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
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
