import { TestBed } from '@angular/core/testing';

import { RestoranlarService } from './restoranlar.service';

describe('RestoranlarService', () => {
  let service: RestoranlarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoranlarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
