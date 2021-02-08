import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { LoginComponent } from '../login/login.component';

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
    private afAuth: AngularFireAuth,
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
    await this.showLoading();
    await this.afAuth.sendPasswordResetEmail(this.resetForm.value.email);
    await this.dismissLoading();
    await this.messageService.resetPasswordAlert().catch((error) => this.messageService.errorAlert(error));
  }

  get resetFormControl() {
    return this.resetForm.controls;
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
