import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageThreeComponent } from './page-three.component';

describe('PageThreeComponent', () => {
  let component: PageThreeComponent;
  let fixture: ComponentFixture<PageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageThreeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
