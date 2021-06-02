import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home-page-four',
  templateUrl: './home-page-four.component.html',
  styleUrls: ['./home-page-four.component.scss']
})
export class HomePageFourComponent implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor() {}

  ngOnInit() {}

  scrollToLabel(label) {
    const section = document.getElementById(label);
    this.content.scrollToPoint(0, section.offsetTop, 750);
  }
}
