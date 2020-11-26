import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaqPage } from './faq.page';

describe('FaqPage', () => {
  let component: FaqPage;
  let fixture: ComponentFixture<FaqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
