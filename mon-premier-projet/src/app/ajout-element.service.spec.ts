import { TestBed } from '@angular/core/testing';

import { AjoutElementService } from './ajout-element.service';

describe('AjoutElementService', () => {
  let service: AjoutElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
