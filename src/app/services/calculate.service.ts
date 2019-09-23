import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  multiplyResult(type, userValue) {
    if (userValue <= 0) {
      throw new Error('the number can not be negative or equals to zero');
    }

    return type * userValue;
  }

  calculateTva(result) {
    console.log('result')

    return (Math.round(result * 0.2 * 100)) / 100;
  }
}
