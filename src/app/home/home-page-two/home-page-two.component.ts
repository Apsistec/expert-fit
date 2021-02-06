import { Component } from '@angular/core';
import { Benefit, Benefits } from 'src/app/models/benefits';
import { slideInLeft, slideInRight } from 'ng-animate';
import { transition, trigger, useAnimation } from '@angular/animations';

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
export class HomePageTwoComponent {
  benefits: Benefit[] =  Benefits;
  slideInRight: any;
  slideInLeft: any;
  benefitChosen: Benefit | any;

constructor() {
  this.benefitChosen = this.benefits[0];
}

  chooseBenefit(benefit: Benefit) {
    this.benefitChosen = benefit;
  }


}
