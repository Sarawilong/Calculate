import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { CalculateService } from '../../services/calculate.service';

import { CalculatorComponent } from './calculator.component';



describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let service: CalculateService;

  beforeEach(() => { service = new CalculateService(); })
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
        CalculateService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('check if the function is calling the service', async () => {
    const service = TestBed.get(CalculateService);
    spyOn(service , 'multiplyResult').and.callThrough();
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
