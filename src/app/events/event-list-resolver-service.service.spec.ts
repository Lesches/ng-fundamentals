import { TestBed } from '@angular/core/testing';

import { EventListResolverService } from './event-list-resolver-service';

describe('EventListResolverServiceService', () => {
  let service: EventListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
