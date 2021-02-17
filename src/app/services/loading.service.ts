import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    public loadingController: LoadingController,
    public messageService: MessageService

  ) { }

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
}
