import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { MessageService } from '../../services/message.service';
import { LoadingService } from '../../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  hide: boolean;
  loginForm: FormGroup;
  isSubmitted = false;
  error;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public modalController: ModalController,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private router: Router,
    private navController: NavController
  ) {}
  
  ngOnInit() {
    this.hide = true;
    this.createForm();
    this.router.setUpLocationChangeListener();
  }

  ngAfterViewInit() {
    if (!this.loginForm.valid && this.loginForm.dirty) {
      this.error === true;
    }
    this.error === false;
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
      ]
    });
  }
  
  get loginFormControl() {
    return this.loginForm.controls;
  }

  async onLogin() {
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
    this.modalController.dismiss();
    this.navController.back();
  }
}
