import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { LoadingService } from '../../services/loading.service';
import { MessageService } from '../../services/message.service';
import { AuthPopoverComponent } from '../auth-popover/auth-popover.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  hide: boolean;
  loginForm: FormGroup;
  isSubmitted = false;
  error = false;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public modalController: ModalController,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private router: Router,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.hide = true;
    this.createForm();
    this.router.setUpLocationChangeListener();
  }

  ngAfterViewInit() {
    if (!this.loginForm.valid && !this.loginForm.pristine) {
      this.error = true;
    }
    this.error = false;

    if (!this.loginFormControl.password.valid && this.loginFormControl.password.dirty) {
      if (this.loginFormControl.password.errors.required) {
      } else if (this.loginFormControl.password.errors.minlength) {
      } else if (this.loginFormControl.password.errors.maxlength) {
      } else if (this.loginFormControl.password.errors.pattern) {
        ('At least 1 uppercase, 1 lowercase, and 1 number');
      }
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AuthPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

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

  async onLogin() {
    this.isSubmitted = true;
    this.loadingService.showLoading();
    const res = await this.authService.SignIn(this.loginForm.value);
    if (res !== null) {
      this.dismissModal();
      this.loadingService.dismissLoading().catch((error) => {
        this.dismissModal();
        this.messageService.errorAlert(error);
      });
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
