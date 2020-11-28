import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { slideInLeft, slideInRight } from 'ng-animate';
import { Benefits } from '../../models/training-benefits';
import { MessageService } from '../../services/message.service';
import { GetStartedComponent } from '../../shared/get-started/get-started.component';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home-page-two.component.html',
  styleUrls: ['./home-page-two.component.scss'],
  animations: [
    trigger('slideInRight', [
      transition(
        '* => *',
        useAnimation(slideInRight, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
    trigger('slideInLeft', [
      transition(
        '* => *',
        useAnimation(slideInLeft, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
  ],
})
export class HomePageTwoComponent implements OnInit {
  @ViewChild('mySlider') slider: IonSlides;

  slideOpts = {
    initialSlide: 1,
    speed: 200,
    loop: true,

    breakpoints: {
      350: {
        slidesPerView: 1,
         spaceBetween: 15,
      },
      576: {
        slidesPerView: 1.5,
         spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
         spaceBetween: 15,
      },
    }
  };

  benefits =  Benefits;

  slideInRight: any;
  slideInLeft: any;

  constructor(
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  async showModalGetStarted() {
    const modal = await this.modalController.create({
      component: GetStartedComponent,
      cssClass: 'modal-css',
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }
}
