import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplyService {

  multiplyResult(type, userValue) {

    return type * userValue;
  }

  calculateTva(result) {

    return (Math.round(result * 0.2 * 100)) / 100;
  }
}
