import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoicesPage } from './choices.page';

describe('ChoicesPage', () => {
  let component: ChoicesPage;
  let fixture: ComponentFixture<ChoicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChoicesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
