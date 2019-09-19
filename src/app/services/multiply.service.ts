import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplyService {
 
  multiplyResult(choosenTva, userValue) {
    return choosenTva * userValue
  }

  constructor() { }
}
