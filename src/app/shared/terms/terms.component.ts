import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  constructor(private modalController: ModalController, private navController: NavController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
    this.navController.back();
  }
}
