import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "repeat",
})
export class RepeatPipe implements PipeTransform {
  transform(word: string, frequency: number): string {
    let count = 1;
    let strResult = word;

    while (count < frequency) {
      strResult = `${strResult} ${word}`;
      count += 1;
    }
    return strResult;
  }
}
