import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customDate",
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date): any {
    let result = `Today is ${value.getDate()} ${value.getMonth()} ${value.getFullYear()}`;
    return result;
  }
}
