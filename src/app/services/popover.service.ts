import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from '../shared/popover/popover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  dismiss() {
    this.popoverController.dismiss();
  }

}
