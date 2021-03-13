import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage, GetDownloadURLPipe } from '@angular/fire/storage';
import { Benefit } from 'src/app/models/benefits.model';

@Component({
  selector: 'app-benefits-tracker-results',
  templateUrl: './benefits-tracker-results.component.html',
  styleUrls: ['./benefits-tracker-results.component.scss'],
})
export class BenefitsTrackerResultsComponent implements OnInit {
  
  @Input() benefit: Benefit;

  
  constructor() { }

  ngOnInit() {}

}
