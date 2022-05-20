import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss'],
})
export class ArraysComponent implements OnInit {
  public arrNames = [''];
  public arrNames1 = ['Bartek', 'Kamila', 'Michał', 'Kacper', 'Klaudia'];
  public arrNames2 = ['Dominik', 'Iwona', 'Piotr'];

  constructor() {}

  ngOnInit(): void {
    this.push();
    this.pop();
    this.shift();
    this.unshift();
    this.concat();
    this.indexOf();
    this.find();
    this.findIndex();
    this.forEach();
    this.map();
    this.includes();
    this.sort();
    this.slice();
    this.splice();
  }

  public push(): void {
    this.arrNames1.push('Wiktoria');
    console.log(this.arrNames1);
  }

  public pop(): void {
    this.arrNames1.pop();
    console.log(this.arrNames1);
  }

  public shift(): void {
    this.arrNames1.shift();
    console.log(this.arrNames1);
  }

  public unshift(): void {
    this.arrNames1.unshift('Natalia');
    console.log(this.arrNames1);
  }

  public concat(): void {
    this.arrNames = this.arrNames1.concat(this.arrNames2);
    console.log(this.arrNames);
  }

  public indexOf(): void {
    const index = this.arrNames.indexOf('Dominik');
    console.log(index);
  }

  public find(): void {
    const result = this.arrNames.find((name) => name === 'Dominik');
    console.log(result);
  }

  public findIndex(): void {
    const result = this.arrNames.findIndex((x) => x === 'Kamila');
    console.log(result);
  }

  public forEach(): void {
    this.arrNames.forEach((name) => console.log(name));
    console.log(this.arrNames);
  }

  public map(): void {
    this.arrNames = this.arrNames2.map((name, idx) => (name = 'Imie ' + idx));
    console.log(this.arrNames);
  }

  public includes(): void {
    const nameToSearch = 'Imie 1';
    const result = this.arrNames.includes(nameToSearch);

    if (result === true) {
      console.log('Tablica zawiera imie', nameToSearch);
    }
  }

  public sort(): void {
    const sortedArrNames1 = this.arrNames1.sort();
    console.log(sortedArrNames1);
  }

  public slice(): void {
    const slicedArrNames = this.arrNames.slice(1);
    console.log(slicedArrNames);
  }

  public splice(): void {
    const splicedArrNames = this.arrNames.splice(0, 1, 'Nowe Imie 1');
    console.log(splicedArrNames);
  }
}
