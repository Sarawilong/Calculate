import { Component } from '@angular/core';
import { MultiplyService } from 'src/app/services/multiply.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  userValue;
  result: number;
  type: number;
  tva: number;

  types = [
    { name: 'type1', value: 12 },
    { name: 'type2', value: 20 },
    { name: 'type3', value: 49 }
  ];

  async calculateTva() {

    if (this.userValue <= 0) {

      return throwError('the number can not be negative or equals to zero');
    }

    this.result = await this.multiplyService.multiplyResult(this.type, this.userValue);
    this.tva =  this.multiplyService.calculateTva(this.result);
  }

  constructor( private multiplyService: MultiplyService ) { }
}
