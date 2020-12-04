import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from '../../models/users.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { Ratings } from 'src/app/models/ratings.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage {





  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    breakpoints: {
      150: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 15
      }
    }
  };
  reviewForm;
  user: User;
  testimonials = Ratings;
  newTestimonial;
    segment: string;
  constructor(
    public modalController: ModalController,
    private authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private afs: AngularFirestore,
  ) {
    // this.authService.user.pipe(map((user) => (this.user = user)));

    this.reviewForm = this.fb.group({
      review: ['', [Validators.required]],
    });
  }

  segmentChanged(event) {

  }

  setTestimonial(review: string) {
    return this.afs
      .doc(`testimonials/${this.newTestimonial.id}`)
      .set({
        review,
      })
      .then(() => {
        this.messageService.generalToast({
            header: 'Testimonial Created',
            message: 'Your review/testimonial has been created.'
        });
      });
  }

  getTestimonial() {
    this.afs
      .collection<any>('testimonials')
      .get()
      .pipe(
        map((testimonial) => {
          this.newTestimonial = testimonial;
        })
      );
  }
}
