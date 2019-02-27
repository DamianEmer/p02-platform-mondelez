import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineFormEditComponent } from './line-form-edit.component';

describe('LineFormEditComponent', () => {
  let component: LineFormEditComponent;
  let fixture: ComponentFixture<LineFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
