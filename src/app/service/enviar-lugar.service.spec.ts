import { TestBed } from '@angular/core/testing';

import { EnviarLugarService } from './enviar-lugar.service';

describe('EnviarLugarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviarLugarService = TestBed.get(EnviarLugarService);
    expect(service).toBeTruthy();
  });
});
