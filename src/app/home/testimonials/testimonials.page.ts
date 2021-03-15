import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { Review } from 'src/app/models/reviews.model';
import { MessageService } from 'src/app/services/message.service';
import { ReviewService } from 'src/app/services/review.service';
import { NewReviewComponent } from 'src/app/shared/new-review/new-review.component';

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
  segment: any = 'default';
  user;

  constructor(
    private reviewService: ReviewService,
    public afAuth: AngularFireAuth,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    return this.reviewService.getAllReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  getUserReviews() {
    // this.user = this.afAuth.authState.toPromise();
  }
  // hover(value: number) {
  //     this.overStar = value;
  //   }

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
      return this.messageService.errorAlert(error.message);
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
