import { Component, OnInit } from '@angular/core';
import { Benefit } from '../../models/benefits.model';
import { slideInLeft, slideInRight } from 'ng-animate';
import { transition, trigger, useAnimation } from '@angular/animations';
import { BenefitsService } from 'src/app/services/benefits.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

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
          params: { timing: 1.5, delay: 0.5 }
        })
      )
    ]),
    trigger('slideInLeft', [
      transition(
        '* => *',
        useAnimation(slideInLeft, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 }
        })
      )
    ])
  ]
})
export class HomePageTwoComponent implements OnInit {
  slideInRight: any;
  slideInLeft: any;

  benefitChosen: Benefit[];

  constructor() {
  }
  
  ngOnInit() {
      }

      onBenefitChosen(benefitChoice){
        this.benefitChosen = benefitChoice;
      }
}
