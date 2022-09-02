import { TestBed } from '@angular/core/testing';

import { DisplayGoalDataService } from './display-goal-data.service';

describe('DisplayGoalDataService', () => {
  let service: DisplayGoalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayGoalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
