import { Component, OnInit } from '@angular/core';

const logProperty = (target: any, memberName: string) => {
  console.log("Init property: " + memberName);
};

function logMethod() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Calling function: " + propertyKey);
  };
}

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {

  @logProperty
  private exampleProperty = "ExampleProperty"

  constructor() { }

  ngOnInit(): void {
    this.exampleMethod();
  }

  @logMethod()
  private exampleMethod() {
    console.log("Example method")
  }
  

}
