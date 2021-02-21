import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  hide: boolean;
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public modalController: ModalController,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private navController: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    this.hide = true;
    this.createForm();
    this.isSubmitted = false;
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

  async onLogin() {
    this.isSubmitted = true;
    await this.loadingService.showLoading();
    await this.authService.SignIn(this.loginForm.value);
    this.isSubmitted = false;
    await this.loadingService.dismissLoading().catch((error) => this.messageService.errorAlert(error));
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  // async showForgotModal() {
  //   this.dismissModal();
  //   const modal = await this.modalController.create({
  //     component: ForgotPasswordComponent,
  //     componentProps: {
  //       cssClass: 'modal-css'
  //     }
  //   });
  //   await modal.present().catch((error) => this.messageService.errorAlert(error));
  // }

  dismissModal() {
    this.modalController
      .dismiss()
      .then(() => {
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        this.messageService.errorAlert(error);
      });
  }

  // async showRegisterModal() {
  //   this.dismissModal();
  //   const modal = await this.modalController.create({
  //     component: SignupComponent,
  //     componentProps: {
  //       cssClass: 'modal-css'
  //     }
  //   });
  //   await modal.present().catch((error) => this.messageService.errorAlert(error));
  // }
}
