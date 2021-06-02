import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalViewPage } from './modal-view.page';

describe('ModalViewPage', () => {
  let component: ModalViewPage;
  let fixture: ComponentFixture<ModalViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalViewPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
