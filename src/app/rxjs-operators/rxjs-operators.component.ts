import { Component, OnInit } from "@angular/core";
import { fromEvent, interval, of } from "rxjs";
import { concatMap, delay, map, mergeMap, switchMap } from "rxjs/operators";

@Component({
  selector: "app-rxjs-operators",
  templateUrl: "./rxjs-operators.component.html",
  styleUrls: ["./rxjs-operators.component.css"],
})
export class RxjsOperatorsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const obs$1 = fromEvent(document, "click");
    const obs$2 = interval(1000);
    const finalObs$ = obs$1.pipe(switchMap((event) => obs$2));
    // const subscription = finalObs$.subscribe(() => {});

    // mergeMap Example
    console.log("MergeMap");
    of("Angular", "ReactJs", "VueJs")
      .pipe(
        mergeMap((el) =>
          of(1, 2).pipe(
            delay(2000),
            map((num) => el + num)
          )
        )
      )
      .subscribe((res) => console.log(res));

    // switchMap Example
    console.log("switchMap");
    of("Angular", "ReactJs", "VueJs")
      .pipe(
        switchMap((el) =>
          of(1, 2).pipe(
            delay(2000),
            map((num) => el + num)
          )
        )
      )
      .subscribe((res) => console.log(res));

    // concatMap Example
    console.log("concatMap");
    of("Angular", "ReactJs", "VueJs")
      .pipe(
        concatMap((el) =>
          of(1, 2).pipe(
            delay(2000),
            map((num) => el + num)
          )
        )
      )
      .subscribe((res) => console.log(res));
  }
}
