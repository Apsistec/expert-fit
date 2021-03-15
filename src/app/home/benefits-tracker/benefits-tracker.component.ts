/* eslint-disable @typescript-eslint/member-ordering */
import { EventEmitter, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { BenefitsService } from 'src/app/services/benefits.service';
import { Benefit } from '../../models/benefits.model';

@Component({
  selector: 'app-benefits-tracker',
  templateUrl: './benefits-tracker.component.html',
  styleUrls: ['./benefits-tracker.component.scss']
})
export class BenefitsTrackerComponent implements OnInit {

  benefits: Observable<any[]>;
  private ngUnsubscribe: Subject<any> = new Subject();
  @Output() sendBenefit = new EventEmitter<Benefit>();
  setBenefit;

  constructor(private benefitsService: BenefitsService) {}

  async ngOnInit() {
    this.benefits = await this.benefitsService.getBenefits();
  }

  onChooseBenefit(benefit: Benefit) {
    this.sendBenefit.emit(benefit);
  }

}
