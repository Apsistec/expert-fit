import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    LoadingController,
    ModalController
} from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  loginTitle: boolean;
  hide: boolean;
  hid: boolean;
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.hide = true;
    this.hid = true;
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
        ],
      ],
      displayName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
    });

    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(8),
    //       Validators.maxLength(25),
    //       Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
    //     ],
    //   ],
    // });
  }


  // async onLogin() {
  //   await this.showLoading();
  //   await this.authService.SignIn(this.loginForm.value);
  //   await this.dismissLoading();
  // }

  async onRegister(registerForm) {
    await this.showLoading();
    await this.authService.SignUp(this.registerForm.value);
    await this.dismissLoading();
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
      keyboardClose: true,
    });
    await loading.present();
  }

  async dismissLoading() {
    await this.loadingController.dismiss();
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }


  dismissModal() {
    this.modalController.dismiss();
  }
}
