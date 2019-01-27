import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppagesFormComponent } from './stoppages-form.component';

describe('StoppagesFormComponent', () => {
  let component: StoppagesFormComponent;
  let fixture: ComponentFixture<StoppagesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoppagesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoppagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
