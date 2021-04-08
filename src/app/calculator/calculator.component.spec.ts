import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add  numbers correctly', () => {
    expect(component.add(2,3)).toEqual(5);
    expect(component.add(-8, -13)).toEqual(-21);
    expect(component.add(98, 56)).toEqual(154);
    expect(component.add(9.8, 5.6)).toEqual(15.4);
  })

  it('should subtract values correctly', () => {
    expect(component.subtract(-24, 5)).toEqual(-29);
    expect(component.subtract(207, -207)).toEqual(414);
    expect(component.subtract(9, 0)).toEqual(9);
  })

  it('should multiply values correctly', () => {
    expect(component.multiply(24, 5)).toEqual(120);
    expect(component.multiply(-24, -5)).toEqual(120);
    expect(component.multiply(24, -5)).toEqual(-120);
  })

  it('should divide values correctly', () => {
    expect(component.divide(24, 2)).not.toEqual(3);
    expect(component.divide(24, -2)).toEqual(-12);
  })

  it('heading should be  "Calculator Works!"', () => {
    // const fixture = TestBed.createComponent(component);
    // fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Calculator Works!')
  })
});
