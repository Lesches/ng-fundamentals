import { TestBed } from '@angular/core/testing';

import { EventListResolverServiceService } from './event-list-resolver-service.service';

describe('EventListResolverServiceService', () => {
  let service: EventListResolverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListResolverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
