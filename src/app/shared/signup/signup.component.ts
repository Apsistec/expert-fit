import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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
    this.createForm();
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
      ]
    });
  }

  async onRegister() {
    await this.showLoading();
    await this.authService.SignUp(this.registerForm.value);
    await this.dismissLoading().catch((error) => this.messageService.errorAlert(error));
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
      keyboardClose: true
    });
    await loading.present().catch((error) => this.messageService.errorAlert(error));
  }

  async dismissLoading() {
    await this.loadingController.dismiss().catch((error) => this.messageService.errorAlert(error));
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  dismissModal() {
    this.modalController.dismiss().catch((error) => this.messageService.errorAlert(error));
  }

  async showLoginModal() {
    this.dismissModal();
    const modal = await this.modalController.create({
      component: LoginComponent,
      componentProps: {
        cssClass: 'modal-css'
      }
    });
    await modal.present().catch((error) => this.messageService.errorAlert(error));
  }
}
