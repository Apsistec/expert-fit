import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenefitsTrackerResultsComponent } from './benefits-tracker-results.component';

describe('BenefitsTrackerResultsComponent', () => {
  let component: BenefitsTrackerResultsComponent;
  let fixture: ComponentFixture<BenefitsTrackerResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsTrackerResultsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsTrackerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
