import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {
    LoadingController,
    ModalController
} from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginTitle: boolean;
  hide: boolean;
  hid: boolean;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loginTitle = true;
    this.hid = true;
    this.createForm();
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
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
        ],
      ],
    });
  }


  async onLogin(loginform: NgForm) {
    await this.showLoading();
    await this.authService.SignIn(this.loginForm.value);
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

  get loginFormControl() {
    return this.loginForm.controls;
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
