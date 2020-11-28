import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from '../../models/users.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-ratings',
  templateUrl: 'ratings.page.html',
  styleUrls: ['ratings.page.scss'],
})
export class RatingsPage {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      150: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 15
      }
    }
  };
  reviewForm;
  user: User;
  testimonials;

  constructor(
    public modalController: ModalController,
    private authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private afs: AngularFirestore,
  ) {
    // this.authService.user$.pipe(map((user) => (this.user = user)));

    this.reviewForm = this.fb.group({
      review: ['', [Validators.required]],
    });
  }

  setTestimonial(review: string) {
    return this.afs
      .doc(`testimonials/${this.testimonials.id}`)
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
          this.testimonials = testimonial;
        })
      );
  }
}
