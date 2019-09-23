import { Component } from '@angular/core';

import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  constructor(
    private multiplyService: CalculateService
    ) {}

  result: number;
  userValue: number;
  tva: number;
  type: number;

  types = [
    { name: 'type1', value: 12 },
    { name: 'type2', value: 20 },
    { name: 'type3', value: 49 },
  ];

  async calculateTva() {
    this.result = await this.multiplyService.multiplyResult(this.type, this.userValue);
    this.tva =  this.multiplyService.calculateTva(this.result);
  }
}
