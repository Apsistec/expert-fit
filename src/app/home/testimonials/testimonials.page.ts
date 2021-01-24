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
  value: any;
  rate;
  overStar: number | undefined;
  reviewForm;
  user: User;
  testimonials = Ratings;
  newTestimonial;
  segment: string;
  constructor(
    public modalController: ModalController,
    public authService: AuthService,
    private messageService: MessageService,
    private afs: AngularFirestore,
  ) {
    

  }

  hoveringOver(value: number): void {
    this.overStar = value;
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
