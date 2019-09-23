import { TestBed } from '@angular/core/testing';

import { CalculateService } from './calculate.service';

describe('MultiplyService', () => {
  let service: CalculateService;

  it('CalculateService should be created', () => {
    service = TestBed.get(CalculateService);
    expect(service).toBeTruthy();
  });

  describe('multiplyResult', () => {
    it('should works with an absolute positive number', () => {
      const result = service.multiplyResult(12, 2);
      expect(result).toEqual(24);
    });

    it('should works with decimal number', () => {
      const result = service.multiplyResult(12, 2.5);
      expect(result).toEqual(30);
    });

    it('should not work with a negative number or equal to 0', () => {
      expect(() => service.multiplyResult(12, -2)).toThrowError('the number can not be negative or equals to zero');
    });
  });

  describe('calculateTva', () => {
    it('should calculates TVA of 20% with a absolute positive number', () => {
      const result = service.calculateTva(30);
      expect(result).toEqual(6);
    });

    it('should calculates the TVA of 20% with decimal number', () => {
      const result = service.calculateTva(92.142);
      expect(result).toEqual(18.43);
    });
  });
});
