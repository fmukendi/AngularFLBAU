import { TestBed, inject } from '@angular/core/testing';

import { CurComponentService } from './cur-component.service';

describe('CurComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurComponentService]
    });
  });

  it('should be created', inject([CurComponentService], (service: CurComponentService) => {
    expect(service).toBeTruthy();
  }));
});
