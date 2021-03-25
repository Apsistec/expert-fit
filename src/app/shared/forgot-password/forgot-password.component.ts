import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { LoadingService } from '../../services/loading.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {
  resetForm: FormGroup;
  error = false;
  isSubmitted = false;

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
    public authService: AuthService,
    private messageService: MessageService,
    private loadingService: LoadingService,
    public navController: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      updateOn: 'blur'
    });
  }

  ngAfterViewInit() {
    if (!this.resetForm.valid && !this.resetForm.pristine) {
      this.error = true;
    }{
      this.error = false;
    }
  }

  // Recover password
  async onReset() {
    this.isSubmitted = true;
    const email = this.resetForm.value.email;
    await this.loadingService.showLoading();
    await this.authService.passReset(email);
    await this.loadingService.dismissLoading();
    await this.messageService.resetPasswordAlert().catch((error) => this.messageService.errorAlert(error));
  }

  get resetFormControl() {
    return this.resetForm.controls;
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  goToLogin() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
