import { TestBed } from '@angular/core/testing';

import { MultiplyService } from './multiply.service';

describe('MultiplyService', () => {
  let service: MultiplyService;

  beforeEach(() => {service = new MultiplyService(); })

  it('should be created', () => {
    const service: MultiplyService = TestBed.get(MultiplyService);
    expect(service).toBeTruthy();
  });

  describe('should calculateTva', () => {
    it('should return a positive number, the result of tva * userInput', () => {
      const result = service.multiplyResult(4, 4)
      expect(result).toEqual(16)
    })
  });
});