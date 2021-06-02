import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {
  loginTitle: boolean;
  hide = true;
  hid: boolean;
  registerForm: FormGroup;
  formError: boolean;
  errorMessage;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public router: Router
  ) {}

  ngOnInit() {
    this.createForm();
    this.router.setUpLocationChangeListener();
  }

  ngAfterViewInit() {
    if (!this.registerForm.controls.valid && this.registerForm.dirty) {
      return this.formError;
    }
    return !this.formError;
  }

  createForm() {
    this.registerForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
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
      verify: ['', [Validators.required]],
      updateOn: 'blur'
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  get passwordDoesMatch() {
    return this.registerFormControl.password.value === this.registerFormControl.verify.value;
  }

  async submit() {
    const displayName = this.registerFormControl.displayName.value;
    const email = this.registerFormControl.email.value;
    const password = this.registerFormControl.password.value;
    try {
      const loading = await this.loadingController.create({
        message: 'Loading...',
        keyboardClose: true,
        showBackdrop: true,
        translucent: true
      });
      await loading.present();
      await this.authService.SignUp(displayName, email, password);
      loading.dismiss();
    } catch (error) {
      await this.loadingController.dismiss();
      this.errorMessage = error;
    }
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  dismissModal() {
    this.modalController.dismiss();
    this.router.navigateByUrl('/home');
  }

  goToLogin() {
    this.modalController.dismiss();
    this.router.navigateByUrl('/login');
  }
}
