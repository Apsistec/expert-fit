import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from '../../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {
  loginTitle: boolean;
  hide: boolean;
  hid: boolean;
  registerForm: FormGroup;
  error;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public loadingService: LoadingService,
    public modalController: ModalController,
    private messageService: MessageService,
    public router: Router,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.hide = true;
    this.createForm();
  }

  ngAfterViewInit() {
    if (!this.registerForm.valid && this.registerForm.dirty) {
      this.error === true;
    }
    this.error === false;
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
      verify: [ '', [Validators.required, Validators.minLength(8)]]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  async onRegister(credentials) {
    this.loadingService.showLoading();
    if (this.registerForm.invalid) {
      return;
    }
    await this.authService.SignUp(credentials);
    this.loadingService.dismissLoading().catch((error) => this.messageService.errorAlert(error));
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  goToLogin(){
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/login');
    })
  }

}
