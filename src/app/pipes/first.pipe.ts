import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string): string {
    const mayus = value.charAt(0).toUpperCase();
    const palabra = value.slice(1)
    return `${mayus + palabra}`;
  }
}
