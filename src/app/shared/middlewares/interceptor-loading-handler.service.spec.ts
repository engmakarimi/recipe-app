import { TestBed } from '@angular/core/testing';

import { InterceptorLoadingHandlerService } from './interceptor-loading-handler.service';

describe('InterceptorLoadingHandlerService', () => {
  let service: InterceptorLoadingHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorLoadingHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
