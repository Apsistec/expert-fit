import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SeoService } from '../../services/seo.service';


@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
