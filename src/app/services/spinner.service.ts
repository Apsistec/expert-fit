import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading = false;
  constructor(private loadingController: LoadingController) {}

  async loadSpinner() {
    const load = await this.loadingController
      .create({
        spinner: 'circles',
        duration: 5000,
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
