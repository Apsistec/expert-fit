import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private navController: NavController
  ) {}

  ngOnInit() {}

  goBack() {
    this.modalController.dismiss();
    this.navController.back();
  }
}
