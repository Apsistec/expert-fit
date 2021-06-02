import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {
  resetForm: FormGroup;
  formError = false;
  errorMessage;

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      updateOn: 'blur'
    });
    this.router.setUpLocationChangeListener();
  }

  ngAfterViewInit() {
    if (!this.resetForm.controls.valid && !this.resetForm.pristine) {
      this.formError = true;
    }
    {
      this.formError = false;
    }
  }

  // Recover password
  async onReset() {
    try {
      const loading = await this.loadingController.create({
        message: 'Loading...',
        keyboardClose: true,
        showBackdrop: true,
        translucent: true
      });
      await loading.present();
      const email = this.resetFormControls.email.value;
      await this.authService.passReset(email);
      loading.dismiss();
    } catch (error) {
      await this.loadingController.dismiss();
      this.errorMessage = error;
    }
  }

  get resetFormControls() {
    return this.resetForm.controls;
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  goToLogin() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
