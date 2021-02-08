import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.scss'],
})
export class AboutAppComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    // private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    // this.menuCtrl.close().then(
    //   () => {
    //     this.menuCtrl.enable(false);
    //   }
    // );

  }

  goBack() {
    // const isEnabled = this.menuCtrl.isEnabled();
    this.navCtrl.back();
    // if (!isEnabled) {
    //   this.menuCtrl.enable(true);
    // }
 }
}
