import { TestBed } from '@angular/core/testing';

import { DominionService } from './dominion.service';

describe('DominionService', () => {
  let service: DominionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DominionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
