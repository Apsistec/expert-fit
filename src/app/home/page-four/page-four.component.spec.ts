import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageFourComponent } from './page-four.component';

describe('PageFourComponent', () => {
  let component: PageFourComponent;
  let fixture: ComponentFixture<PageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFourComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
