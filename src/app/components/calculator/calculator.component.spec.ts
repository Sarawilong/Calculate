import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiplyService } from'../../services/multiply.service';
import { type } from 'os';
import { by } from 'protractor';


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

  it ("check if there is a select value", async()=>{
    let fixture= TestBed.createComponent(CalculatorComponent);
    let element1= fixture.debugElement.nativeElement.querySelector("select");
    expect(element1.getAttribute("option")).toBeDefined();
  });
  

  it ("check if the function is calling the service ", async()=>{
    let service = TestBed.get(MultiplyService);
    spyOn(service , "multiplyResult").and.callThrough();
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

})
