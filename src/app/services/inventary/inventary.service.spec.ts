import { TestBed, inject } from '@angular/core/testing';

import { InventaryService } from './inventary.service';

describe('InventaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventaryService]
    });
  });

  it('should be created', inject([InventaryService], (service: InventaryService) => {
    expect(service).toBeTruthy();
  }));
});
