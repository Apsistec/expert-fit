import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { LoadingService } from '../services/loading.service';
import { MessageService } from '../services/message.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {
  resetForm: FormGroup;
  error: boolean;
  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
    public authService: AuthService,
    private messageService: MessageService,
    private loadingService: LoadingService,
    public navController: NavController
  ) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    // tslint:disable-next-line: no-unused-expression
    this.error === false;
  }
  ngAfterViewInit() {
    if (!this.resetForm.valid && this.resetForm.dirty) {
      // tslint:disable-next-line: no-unused-expression
      this.error === true;
    }
    // tslint:disable-next-line: no-unused-expression
    this.error === false;
  }

  // Recover password
  async onReset() {
    const email = this.resetForm.value.email;
    await this.loadingService.showLoading();
    await this.authService.passReset(email);
    await this.loadingService.dismissLoading();
    await this.messageService.resetPasswordAlert().catch((error) => this.messageService.errorAlert(error));
  }

  get resetFormControl() {
    return this.resetForm.controls;
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
