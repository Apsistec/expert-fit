import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideosComponent } from './videos.component';

describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
