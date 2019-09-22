import { Component } from '@angular/core';
import { MultiplyService } from 'src/app/services/multiply.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent{

  userValue;
  result: number;
  selectedOption: number;  

  types = [
    { name: "type1", value: 12 },
    { name: "type2", value: 20 },
    { name: "type3", value: 49 }
  ];

  calculateTva() {
    
    if(this.userValue < 0){

      return NaN;
    }

    this.result = this.multiplyService.multiplyResult(this.selectedOption, this.userValue);
  }

  constructor( private multiplyService: MultiplyService ) { }
}