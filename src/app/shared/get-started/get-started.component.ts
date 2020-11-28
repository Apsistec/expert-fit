import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    LoadingController,
    ModalController
} from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  loginTitle: boolean;
  hide: boolean;
  hid: boolean;
  registerForm: FormGroup;
  loginForm: FormGroup;
  @ViewChild('flipcontainer', { static: false }) flipcontainer: ElementRef;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loginTitle = true;
    this.hide = true;
    this.hid = true;
    this.createForms();
  }

  createForms() {
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

    this.loginForm = this.fb.group({
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
    });
  }


  async onLogin() {
    await this.showLoading();
    await this.authService.SignIn(this.loginForm.value);
    await this.dismissLoading();
  }

  async onRegister() {
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

  toggleHid() {
    this.hid = !this.hid;
  }

  toggleRegister() {
    this.loginTitle = !this.loginTitle;
    this.flipcontainer.nativeElement.classList.toggle('flip');
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
