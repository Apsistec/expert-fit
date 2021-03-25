import { Observable, Subject } from 'rxjs';

/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Benefit } from '../../models/benefits.model';
import { BenefitsService } from '../../services/benefits.service';

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
