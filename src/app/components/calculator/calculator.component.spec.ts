import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  describe('calculateTva', () => {
    it('should return a positive number, the result of tva * userInput', () => {
      const result = this.component.calculateTva()
      expect(result).toBe(typeof Number)
    })
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

})
