/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AngularConceptsService } from './angular-concepts.service';

describe('Service: AngularConcepts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularConceptsService]
    });
  });

  it('should ...', inject([AngularConceptsService], (service: AngularConceptsService) => {
    expect(service).toBeTruthy();
  }));
});
