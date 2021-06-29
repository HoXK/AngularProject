import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
