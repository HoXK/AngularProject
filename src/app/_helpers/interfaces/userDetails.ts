import { Observable } from "rxjs/observable";
export interface Users {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  country: string;
  address: string;

  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
