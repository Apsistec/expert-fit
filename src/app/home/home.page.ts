import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { bounceOutUp, flash } from 'ng-animate';
// import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('bounceOutUp', [
      transition(
        '* => *',
        useAnimation(bounceOutUp, {
          params: { timing: 1.75, delay: 2.4 }
        })
      )
    ]),
    trigger('flash', [
      transition(
        '* => *',
        useAnimation(flash, {
          params: { timing: 0.66, delay: 3.95 }
        })
      )
    ])
  ]
})
export class HomePage implements OnInit {
  title = 'Home Page';
  bounceOutUp: any;
  flash: any;

  @ViewChild(IonContent, { static: false }) content: IonContent;


  ngOnInit() {}


  scrollToTop() {
    this.content.scrollToTop(750);
  }
}
