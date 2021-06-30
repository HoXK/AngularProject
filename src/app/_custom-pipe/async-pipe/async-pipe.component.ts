import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, interval } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "app-async-pipe",
  templateUrl: "./async-pipe.component.html",
  styleUrls: ["./async-pipe.component.css"],
})
export class AsyncPipeComponent implements OnInit, OnDestroy {
  promise: Promise<{}>;
  observable: Observable<number>;
  subscription: Subscription = null;
  observableData: number;

  constructor() {
    this.promise = this.getPromise();
    this.observable = this.getObservable();
    this.subscribeObservable();
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getObservable() {
    return interval(1000).pipe(
      take(10),
      map((v) => v * v)
    );
  }

  subscribeObservable() {
    this.subscription = this.getObservable().subscribe((v) => {
      this.observableData = v;
    });
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise complete!");
      }, 3000);
    });
  }
}
