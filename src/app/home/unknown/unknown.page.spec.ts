import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnknownPage } from './unknown.page';

describe('UnknownPage', () => {
  let component: UnknownPage;
  let fixture: ComponentFixture<UnknownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnknownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
