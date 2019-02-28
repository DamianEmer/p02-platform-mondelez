import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageModalComponent } from './error-message-modal.component';

describe('ErrorMessageModalComponent', () => {
  let component: ErrorMessageModalComponent;
  let fixture: ComponentFixture<ErrorMessageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
