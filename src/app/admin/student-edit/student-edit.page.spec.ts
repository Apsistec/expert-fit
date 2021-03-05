import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentEditPage } from './student-edit.page';

describe('StudentEditPage', () => {
  let component: StudentEditPage;
  let fixture: ComponentFixture<StudentEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
