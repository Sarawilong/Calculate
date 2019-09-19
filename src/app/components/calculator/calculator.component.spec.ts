import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiplyService } from'../../services/multiply.service';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule, 
        ReactiveFormsModule, 
      ],
      declarations: 
      [ 
        CalculatorComponent,
      ],
      providers: 
      [ 
        MultiplyService,
      ],
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  // describe('calculateTva', () => {
  //   it('should return a positive number, the result of tva * userInput', () => {
  //     const result = component.calculateTva();
  //     expect(result).toEqual(16)
  //   })
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

})
