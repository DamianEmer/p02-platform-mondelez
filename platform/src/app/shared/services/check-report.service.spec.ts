import { TestBed } from '@angular/core/testing';

import { CheckReportService } from './check-report.service';

describe('CheckReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckReportService = TestBed.get(CheckReportService);
    expect(service).toBeTruthy();
  });
});
