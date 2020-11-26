import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestimonialsPage } from './testimonials.page';

describe('TestimonialsPage', () => {
  let component: TestimonialsPage;
  let fixture: ComponentFixture<TestimonialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
