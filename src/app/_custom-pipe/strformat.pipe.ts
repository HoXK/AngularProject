import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "strformat",
})
export class StrformatPipe implements PipeTransform {
  transform(value: string, separator: string): string {
    let result = value.split(" ").join(separator);
    return result;
  }
}
