import { TestBed } from '@angular/core/testing';

import { NewsInnerService } from './news-inner.service';

describe('NewsInnerService', () => {
  let service: NewsInnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsInnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
