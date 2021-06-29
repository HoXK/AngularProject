import { UpperCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myuppercasetwo",
})
export class MyUppercaseTwoPipe implements PipeTransform {
  transform(value: string, separator: string): string {
    let upipe = new UpperCasePipe();
    let result = upipe.transform(value);
    result = result.split(" ").join(separator);
    return result;
  }
}
