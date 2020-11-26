import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerDashboardPage } from './customer-dashboard.page';

describe('CustomerDashboardPage', () => {
  let component: CustomerDashboardPage;
  let fixture: ComponentFixture<CustomerDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
