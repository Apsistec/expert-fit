import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from '../../models/users.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { Ratings } from 'src/app/models/ratings.model';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class TestimonialsPage {

  reviewForm;
  user: User;
  testimonials = Ratings;
  newTestimonial;
  segment: string;
  constructor(
    public modalController: ModalController,
    public authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private afs: AngularFirestore,
    config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = false;
    this.reviewForm = this.fb.group({
      review: ['', [Validators.required]],
    });
  }



  setTestimonial(testimonial: string) {
    return this.afs
      .doc(`testimonials/${this.newTestimonial.id}`)
      .set({
        testimonial,
      })
      .then(() => {
        this.messageService.generalToast({
          header: 'Testimonial Created',
          message: 'Your review/testimonial has been created.',
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
