import { TestBed } from '@angular/core/testing';

import { ChipsServicesTsService } from './chips.services.ts.service';

describe('ChipsServicesTsService', () => {
  let service: ChipsServicesTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChipsServicesTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
