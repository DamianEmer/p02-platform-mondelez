import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCheckReportComponent } from './table-check-report.component';

describe('TableCheckReportComponent', () => {
  let component: TableCheckReportComponent;
  let fixture: ComponentFixture<TableCheckReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCheckReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCheckReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
