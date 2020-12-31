import { Input, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Benefit, Benefits } from 'src/app/models/benefits';

@Component({
  selector: 'app-benefit-tracker',
  templateUrl: './benefit-tracker.component.html',
  styleUrls: ['./benefit-tracker.component.scss'],
})
export class BenefitTrackerComponent {
  id: string;
  @Input() benefit: Benefit;

  constructor() {}

}
