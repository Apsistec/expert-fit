import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading;

  constructor(public loadingController: LoadingController, public messageService: MessageService) {}

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      keyboardClose: true
    });
    await loading.present().catch((error) => this.messageService.errorAlert(error.message));
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
        return this.messageService.errorAlert(error.message);
      });
  }

  async dismissLoading() {
    await this.loadingController.dismiss().catch((error) => this.messageService.errorAlert(error.message));
  }
}
