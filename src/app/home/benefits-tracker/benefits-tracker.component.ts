import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { BenefitsService } from 'src/app/services/benefits.service';
import { Benefit } from '../../models/benefits.model';

@Component({
  selector: 'app-benefits-tracker',
  templateUrl: './benefits-tracker.component.html',
  styleUrls: ['./benefits-tracker.component.scss'],
})
export class BenefitsTrackerComponent implements OnInit {

  benefits: Observable<Benefit[]>;
  
  benefitChoice;
  @Output() benefitChosen = new EventEmitter();

  constructor(private benefitsService: BenefitsService) {
    // this.benefit = {} as Benefit
  }

  async ngOnInit() {
    this.benefits = await this.benefitsService.getBenefits();
    // this.benefit= this.benefits[0];
  }

  onChooseBenefit(benefitChoice) {
    this.benefitChosen.emit(benefitChoice);
  }

}
