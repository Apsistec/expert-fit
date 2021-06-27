import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { MessageService } from '../../services/message.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  constructor(
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
    modal.present();
  }
}
