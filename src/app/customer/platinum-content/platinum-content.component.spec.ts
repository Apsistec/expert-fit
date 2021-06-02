import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlatinumContentComponent } from './platinum-content.component';

describe('PlatinumContentComponent', () => {
  let component: PlatinumContentComponent;
  let fixture: ComponentFixture<PlatinumContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlatinumContentComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlatinumContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
