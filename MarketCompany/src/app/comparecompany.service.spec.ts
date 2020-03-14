import { TestBed } from '@angular/core/testing';

import { ComparecompanyService } from './comparecompany.service';

describe('ComparecompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComparecompanyService = TestBed.get(ComparecompanyService);
    expect(service).toBeTruthy();
  });
});
