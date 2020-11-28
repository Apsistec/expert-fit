import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHttps',
})
export class ToHttpsPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
