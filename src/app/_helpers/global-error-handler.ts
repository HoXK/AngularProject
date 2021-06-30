import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { AuthenticationService } from "../_services/authentication.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error) {
    const authenticationService = this.injector.get(AuthenticationService);

    console.error("An error occurred:", error.message);
    console.error(error);
    alert(`Global Error Handler: ${error.message}`);
  }
}
