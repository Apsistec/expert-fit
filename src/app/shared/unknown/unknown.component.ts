import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.scss']
})
export class UnknownComponent implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navController.navigateRoot('/home');
  }
}
