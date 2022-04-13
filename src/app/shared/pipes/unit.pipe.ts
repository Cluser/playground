import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit',
})
export class UnitPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    value = value + ' ' + args[0];
    return value.toString();
  }
}
