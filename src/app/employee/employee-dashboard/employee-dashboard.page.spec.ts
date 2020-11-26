import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeDashboardPage } from './employee-dashboard.page';

describe('EmployeeDashboardPage', () => {
  let component: EmployeeDashboardPage;
  let fixture: ComponentFixture<EmployeeDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
