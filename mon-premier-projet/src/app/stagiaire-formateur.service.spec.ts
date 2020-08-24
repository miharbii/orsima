import { TestBed } from '@angular/core/testing';

import { StagiaireFormateurService } from './stagiaire-formateur.service';

describe('StagiaireFormateurService', () => {
  let service: StagiaireFormateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagiaireFormateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
