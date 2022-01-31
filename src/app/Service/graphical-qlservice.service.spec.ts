import { TestBed } from '@angular/core/testing';

import { GraphicalQLServiceService } from './graphical-qlservice.service';

describe('GraphicalQLServiceService', () => {
  let service: GraphicalQLServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicalQLServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
