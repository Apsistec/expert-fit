import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Benefit } from '../../models/benefits.model';

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
