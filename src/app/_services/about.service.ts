import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AboutService {
  object = [];

  private subject = new BehaviorSubject<any>(this.object);
  currentObject = this.subject.asObservable();

  constructor() {}

  emitPeopleData(peopleObject: any) {
    this.subject.next(peopleObject);
  }
}
