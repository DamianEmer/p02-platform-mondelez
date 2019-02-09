import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTableComponent } from './special-table.component';

describe('SpecialTableComponent', () => {
  let component: SpecialTableComponent;
  let fixture: ComponentFixture<SpecialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
