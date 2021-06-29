import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CompanyOne'
})
export class CompanyOnePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
