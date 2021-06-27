import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading;
  isLoading= false;

  constructor(public loadingController: LoadingController, public messageService: MessageService) {}

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      keyboardClose: true
    });
    await loading.present().catch((error) => this.messageService.errorAlert(error));
  }

  /* Interceptor */
  serverLoader() {
    this.loadingController
      .create({
        message: 'Processing Server Request...',
        keyboardClose: true
      })
      .then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {
          this.dismissLoading();
        });
      })
      .catch((error) => {
        this.dismissLoading();
        return this.messageService.errorAlert(error);
      });
  }

  async dismissLoading() {
    await this.loadingController.dismiss().catch((error) => this.messageService.errorAlert(error));
  }

  async loadSpinner() {
    const load = await this.loadingController
      .create({
        spinner: 'circles',
        duration: 1600
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss();
          }
        });
      });
  }

  async dismissSpinner() {
    this.isLoading = false;

    await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
