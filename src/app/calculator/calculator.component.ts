import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  add(x, y): number{
    return x+y;
  }
  
  subtract(x, y): number { return (x-y) };
  multiply(x, y): number { return x*y };
  divide(x,y): number { return x/y};

  constructor() { }

  ngOnInit(): void {
  }

}
