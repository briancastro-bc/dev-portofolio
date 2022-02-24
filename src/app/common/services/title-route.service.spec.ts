import { TestBed } from '@angular/core/testing';

import { TitleRouteService } from './title-route.service';

describe('TitleRouteService', () => {
  let service: TitleRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
