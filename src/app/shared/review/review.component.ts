import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviewForm: FormGroup;
  id = null;
  user = '';

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private reviewService: ReviewService,
    private navParam: NavParams,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.reviewForm = this.fb.group({
      message: ['', Validators.required],
      stars: ['', Validators.required]
    });

    this.id = this.navParam.get('id');
    if (this.id) {
      this.reviewService.getReview(this.id).subscribe(review => {
        this.reviewForm.patchValue({
          desc: review['desc'],
          status: review['status']
        });

        // this.ticketForm.controls['title'].disable();
        // this.ticketForm.controls['desc'].disable();

        this.reviewService.getReview(review['creator']).subscribe(user => {
          this.user = user['email'];
        });
      });
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async saveOrUpdate() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.reviewService.createOrUpdateReview(this.id, this.reviewForm.value).then(
      () => {
        loading.dismiss();
        this.close();
      },
      error => {
        loading.dismiss();
      }
    );
  }

  deleteReview() {
    this.reviewService.deleteReview(this.id).then(() => {
      this.modalCtrl.dismiss();
    });
  }
}
