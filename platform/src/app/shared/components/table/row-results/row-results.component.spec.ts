import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowResultsComponent } from './row-results.component';

describe('RowResultsComponent', () => {
  let component: RowResultsComponent;
  let fixture: ComponentFixture<RowResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
