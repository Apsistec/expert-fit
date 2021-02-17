import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { LoadingService } from '../services/loading.service';

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
    public loadingService: LoadingService,
    public modalController: ModalController,
    private messageService: MessageService,
    public navController: NavController
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
    await this.loadingService.showLoading();
    await this.authService.SignUp(this.registerForm.value);
    await this.loadingService.dismissLoading().catch((error) => this.messageService.errorAlert(error));
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  // async showLoginModal() {
  //   this.dismissModal();
  //   const modal = await this.modalController.create({
  //     component: LoginComponent,
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
        this.navController.back();
      })
      .catch((error) => {
        this.messageService.errorAlert(error);
      });
  }
}
