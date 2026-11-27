import { TestBed } from '@angular/core/testing';
import { GestionEscolar } from './gestion-escolar';

describe('GestionEscolar', () => {
  let service: GestionEscolar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEscolar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
