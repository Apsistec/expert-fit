import { DOCUMENT } from '@angular/common';
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { MapComponent } from 'src/app/shared/map/map.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {
  constructor(
    // public platform: Platform,
    private modalController: ModalController,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  async showMapModal() {
    const modal = await this.modalController.create({
      component: MapComponent,
      cssClass: 'modal-css'
    });
    modal.present().catch((error) => {
      this.modalController.dismiss();
      return this.messageService.errorAlert(error.message);
    });
  }
}
