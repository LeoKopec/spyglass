import { TestBed } from '@angular/core/testing';

import { HomeDisplayDataService } from './home-display-data.service';

describe('HomeDisplayDataService', () => {
  let service: HomeDisplayDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeDisplayDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
