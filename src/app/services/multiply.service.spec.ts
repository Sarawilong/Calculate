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
    it('should works a positive number', () => {
      const result = service.multiplyResult(4, 4)
      expect(result).toEqual(16)
    });

  describe('should calculateTva', () => {
    it('should works with decimal number', () => {
      const result = service.multiplyResult(12, 2.5)
      expect(result).toEqual(30)
      });
    });
  });
});