import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsfeedComponent } from './newsfeed.component';

describe('NewsfeedComponent', () => {
  let component: NewsfeedComponent;
  let fixture: ComponentFixture<NewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
