import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { slideInLeft, slideInRight } from 'ng-animate';
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

  slideInRight: any;
  slideInLeft: any;

  constructor(
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

//   async showModalGetStarted() {
//     const modal = await this.modalController.create({
//       component: GetStartedComponent,
//       cssClass: 'modal-css',
//       showBackdrop: true,
//     });
//     return modal.present().catch((err) => {
//       return this.messageService.errorAlert(err);
//     });
//   }
}
