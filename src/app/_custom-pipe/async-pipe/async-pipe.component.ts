import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs/Rx";

@Component({
  selector: "app-async-pipe",
  templateUrl: "./async-pipe.component.html",
  styleUrls: ["./async-pipe.component.css"],
})
export class AsyncPipeComponent implements OnInit, OnDestroy {
  promise: Promise<string>;
  observable: Observable<number>;
  subscription: Subscription;
  observableData: number;

  constructor() {
    // this.promise = this.getPromise();
    // this.observable = this.getObservable();
    // this.subscription = this.subscribeObservable();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getObservable() {
    return Observable.interval(1000)
      .take(10)
      .map((v) => {
        v * v;
      });
  }

  subscribeObservable() {
    // this.subscription = this.getObservable().subscribe((v) => {
    //   this.observableData = v;
    // });
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise complete!");
      }, 3000);
    });
  }
}
