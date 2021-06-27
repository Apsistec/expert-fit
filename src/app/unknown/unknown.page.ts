import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.page.html',
  styleUrls: ['./unknown.page.scss']
})
export class UnknownPage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navController.navigateRoot('/home');
  }
}
