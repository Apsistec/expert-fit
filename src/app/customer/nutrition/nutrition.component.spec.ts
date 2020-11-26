import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutritionComponent } from './nutrition.component';

describe('NutritionComponent', () => {
  let component: NutritionComponent;
  let fixture: ComponentFixture<NutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
