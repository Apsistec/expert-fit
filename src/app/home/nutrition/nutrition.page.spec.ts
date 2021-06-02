import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutritionPage } from './nutrition.page';

describe('NutritionPage', () => {
  let component: NutritionPage;
  let fixture: ComponentFixture<NutritionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
