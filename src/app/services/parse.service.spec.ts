import { TestBed } from '@angular/core/testing';

import { ParseService } from './parse.service';
declare var require: any

describe('ParseService', () => {
  let service: ParseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test the parser with an example RAW JSON', () => {
    let exampleRawJson:any = require('./dataTest.json');
    var response=service.parseResponse(exampleRawJson);
    expect(response.length==3).toBeTrue();

  });
});
