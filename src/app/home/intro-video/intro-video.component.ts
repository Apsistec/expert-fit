import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro-video',
  templateUrl: './intro-video.component.html',
  styleUrls: ['./intro-video.component.scss']
})
export class IntroVideoComponent implements OnInit {
  titleId = 'What Is Expert Fitness?';

  constructor(private modalController: ModalController, private navController: NavController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.navController.back();
    });
  }
}
