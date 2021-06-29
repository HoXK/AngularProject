import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myuppercaseone'
})
export class MyUppercaseOnePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
