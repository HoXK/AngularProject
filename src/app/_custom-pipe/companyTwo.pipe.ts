import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyTwo'
})
export class CompanyTwoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
