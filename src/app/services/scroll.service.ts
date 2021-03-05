import { Injectable, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrolledDown = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor() {}

  scrollToTop() {
    this.content.scrollToTop(750);
  }

  scrollToLabel(label) {
    const section = document.getElementById(label);
    this.content.scrollToPoint(0, section.offsetTop, 750);
  }

  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 700 ? true : false;
  }
}
