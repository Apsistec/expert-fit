import { bounceOutUp, flash } from 'ng-animate';

/* eslint-disable @typescript-eslint/member-ordering */
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';

import { MessageService } from '../../services/message.service';
import { ScrollService } from '../../services/scroll.service';
import { IntroVideoComponent } from '../intro-video/intro-video.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('bounceOutUp', [
      transition(
        '* => *',
        useAnimation(bounceOutUp, {
          params: { timing: 2.75, delay: 2.4 }
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
export class LandingPageComponent implements OnInit {
  title = 'Home Page';
  bounceOutUp: any;
  flash: any;
  dataReturned;
  scrolledDown = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private modalController: ModalController,
    private messageService: MessageService,
    public scrollService: ScrollService
  ) {}

  ngOnInit() {}

  async loadVideo() {
    const modal = await this.modalController.create({
      component: IntroVideoComponent,
      cssClass: 'video-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true
    });
    modal.onWillDismiss().then(() => this.messageService.generalToast('Thank you for watching the video'));
    modal.present().catch((error) => {
      this.modalController.dismiss();
      return this.messageService.errorAlert(error);
    });
  }

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
