import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    public authService: AuthService,
    private messageService: MessageService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
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

  // Recover password
  async onReset() {
    const email = this.resetForm.value.email;
    await this.showLoading();
    await this.authService.passReset(email);
    await this.dismissLoading();
    await this.messageService.resetPasswordAlert().catch((error) => this.messageService.errorAlert(error));
  }

  get resetFormControl() {
    return this.resetForm.controls;
  }

  dismissModal() {
    this.modalController.dismiss().catch((error) => this.messageService.errorAlert(error));
  }

}
