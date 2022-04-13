import { Component, OnInit } from '@angular/core';
import { logProperty } from '../shared/decorators/log-property-decorator';
import { logMethod } from '../shared/decorators/log-method-decorator';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss'],
})
export class DecoratorComponent implements OnInit {
  @logProperty
  private exampleProperty = 'ExampleProperty';

  constructor() {}

  ngOnInit(): void {
    this.exampleMethod();
    this.revert('Hello World');
  }

  @logMethod()
  private exampleMethod() {
    console.log('Example method');
  }

  private revert(string: string): string {
    let a = string.split(' ');
    console.log(a);

    let b = a.reverse();
    console.log(b);
    return string;
  }
}
