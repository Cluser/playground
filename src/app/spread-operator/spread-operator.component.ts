import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread-operator',
  templateUrl: './spread-operator.component.html',
  styleUrls: ['./spread-operator.component.scss'],
})
export class SpreadOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public exampleA(): void {
    const text = 'My name is Bart';
    console.log(...text);
  }

  public exampleB(): void {
    const arrText = ['My', 'name', 'is', 'Bart'];
    console.log(...arrText);
  }

  public exampleC(): void {
    const arr1 = ['one', 'two'];
    const arr2 = [...arr1, 'three', 'four', 'five'];
    console.log(arr2);
  }

  public exampleD(): void {
    let arr1 = [1, 2, 3];
    let arr2 = arr1;

    console.log(arr1); // [1, 2, 3]
    console.log(arr2); // [1, 2, 3]

    arr1.push(4);

    console.log(arr1); // [1, 2, 3, 4]
    console.log(arr2); // [1, 2, 3, 4]
  }

  public exampleE(): void {
    const obj1 = { x: 1, y: 2 };
    const obj2 = { z: 3 };

    // add members obj1 and obj2  to obj3
    const obj3 = { ...obj1, ...obj2 };

    console.log(obj3); // {x: 1, y: 2, z: 3}
  }

  public exampleF(): void {
    this.functionWithSpreadArgument(1, 2, 3, 5, 6, 7);
  }

  public functionWithSpreadArgument(...args: any) {
    console.log(args);
  }
}
