import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit, OnDestroy {
  subs: Subscription = new Subscription();
  reviewForm: FormGroup;
  id = null;
  user = '';

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private reviewService: ReviewService,
    private navParam: NavParams,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reviewForm = this.fb.group({
      message: ['', Validators.required],
      stars: ['', Validators.required]
    });

    this.id = this.navParam.get('id');
    if (this.id) {
      this.reviewService.getReview(this.id).subscribe((review) => {
        this.reviewForm.patchValue({
          desc: review['desc'],
          status: review['status']
        });

        this.reviewService.getReview(review['creator']).subscribe((user) => {
          this.user = user['email'];
        });
      });
    }
  }

  close() {
    this.modalController.dismiss();
  }

  async saveOrUpdate() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    this.reviewService.createOrUpdateReview(this.id, this.reviewForm.value).then(
      () => {
        loading.dismiss();
        this.close();
      },
      (error) => {
        loading.dismiss();
      }
    );
  }

  deleteReview() {
    this.reviewService.deleteReview(this.id).then(() => {
      this.modalController.dismiss();
    });
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
