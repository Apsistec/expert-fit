import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentCreatePage } from './student-create.page';

describe('StudentCreatePage', () => {
  let component: StudentCreatePage;
  let fixture: ComponentFixture<StudentCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
