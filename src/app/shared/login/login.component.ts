// import { LoadingService } from '../services/loading.service';

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';

// import { AuthPopoverComponent } from '../auth-popover/auth-popover.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  hide: boolean;
  loginForm: FormGroup;
  formError = false;
  errorMessage;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public modalController: ModalController,
    private router: Router,
    // private loadingService: LoadingService
    private loadingController: LoadingController // private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.hide = true;
    this.createForm();
    this.router.setUpLocationChangeListener();
  }

  ngAfterViewInit() {
    if (!this.loginForm.controls.valid && !this.loginForm.pristine) {
      this.formError = true;
    }
    this.formError = false;

    // if (!this.loginFormControl.password.valid && this.loginFormControl.password.dirty) {
    //   if (this.loginFormControl.password.errors.required) {
    //   } else if (this.loginFormControl.password.errors.minlength) {
    //   } else if (this.loginFormControl.password.errors.maxlength) {
    //   } else if (this.loginFormControl.password.errors.pattern) {
    //     ('At least 1 uppercase, 1 lowercase, and 1 number');
    //   }
    // }
  }

  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: AuthPopoverComponent,
  //     cssClass: 'my-custom-class',
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')
        ]
      ],
      updateOn: 'blur'
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  async submit() {
    const email = this.loginFormControl.email.value;
    const password = this.loginFormControl.password.value;
    try {
      const loading = await this.loadingController.create({
        message: 'Loading...',
        keyboardClose: true,
        showBackdrop: true,
        translucent: true
      });
      await loading.present();
      await this.authService.SignIn(email, password);
      loading.dismiss();
    } catch (error) {
      this.loadingController.dismiss();
      this.errorMessage = error;
    }
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  goToSignup() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/signup');
    });
  }

  goToForgot() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/forgot-password');
    });
  }
}
