import { TestBed } from '@angular/core/testing';

import { AddSchemaService } from './add-schema.service';

describe('AddSchemaService', () => {
  let service: AddSchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
