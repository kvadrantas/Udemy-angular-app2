import { TestBed } from '@angular/core/testing';

import { PrintInfoService } from './print-info.service';

describe('PrintInfoService', () => {
  let service: PrintInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
