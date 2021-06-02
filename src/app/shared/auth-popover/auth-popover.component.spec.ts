import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthPopoverComponent } from './auth-popover.component';

describe('AuthPopoverComponent', () => {
  let component: AuthPopoverComponent;
  let fixture: ComponentFixture<AuthPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthPopoverComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
