import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiplyService } from'../../services/multiply.service';
import { type } from 'os';


describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let service: MultiplyService;

  beforeEach(() => {service = new MultiplyService(); })  
;
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

  it ("check if there is an input value", async()=>{
    let fixture= TestBed.createComponent(CalculatorComponent);
    let element1= fixture.debugElement.nativeElement.querySelector("input");
    expect(element1.getAttribute("value")).toContain("price");
  });

  it ("check if there is a button that calls a function", async()=>{
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

      fixture.whenStable().then(() => {
      expect(component.calculateTva).toHaveBeenCalled();
    });
  });

  it ("check if there is a select value", async()=>{
    let fixture= TestBed.createComponent(CalculatorComponent);
    let element1= fixture.debugElement.nativeElement.querySelector("select");
    expect(element1.getAttribute("option")).toBeDefined();
  });

  it ("should verify that the function works with user inputs", () => {
    // let fixture= TestBed.createComponent(CalculatorComponent);
    // let inputUser = fixture.debugElement.nativeElement.querySelector("input");
    // inputUser.triggerEventHandler()
    console.log('iciiiiii',this.types)
  })

  // it ("should verify if the function works", () => {
  //   let result = service.multiplyResult(20, 2)
  //   let resultComponent = component.calculateTva()
  //   console.log(resultComponent)
  //   expect(resultComponent).toEqual(result)
  // })
})

// const input = fixture.debugElement.query(By.css('input'));
// input.triggerEventHandler('keydown.enter', {});
// fixture.detectChanges();
