import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Test promises');
    this.promise(2000).then((value) => console.log(value));
    this.promise(3000).then((value) => console.log(value));
    this.promise(5000).then((value) => console.log(value));
  }

  private promise(timer: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise after ' + timer + ' ms');
      }, timer);
    });
  }
}
