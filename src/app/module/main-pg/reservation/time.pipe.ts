import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): any {
    const parts = value.split(':');
    const hours = parts[0];
    const minutes = parts[1];

   return `${hours}:${minutes}`;
  }

}
