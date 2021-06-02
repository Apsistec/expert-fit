import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacilityPage } from './facility.page';

describe('FacilityPage', () => {
  let component: FacilityPage;
  let fixture: ComponentFixture<FacilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
