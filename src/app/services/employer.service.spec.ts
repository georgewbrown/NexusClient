import { TestBed } from '@angular/core/testing';

import { EmployerService } from './employer.service';

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployerService = TestBed.get(EmployerService);
    expect(service).toBeTruthy();
  });
});
