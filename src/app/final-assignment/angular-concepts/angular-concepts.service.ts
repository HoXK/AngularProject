import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AngularConcepts } from "./angular-concepts";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AngularConceptsService {
  angularConcepts: AngularConcepts[];

  constructor(private http: HttpClient) {}

  getAllAngularConcepts(): Observable<AngularConcepts[]> {
    return this.http.get<AngularConcepts[]>(
      `${environment.localApiHost}/angularconcepts/get`
    );
  }
}
