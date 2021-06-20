import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from "@angular/core";

@Directive({
  selector: "[appCountryCode]",
})
export class CountryCodeDirective {
  countryCode: string;
  country: string;
  newEl: any;

  @ViewChild("phoneNumber", { static: true }) tdPhoneNumber: ElementRef;

  constructor(private renderer: Renderer2) {
    console.log(this.tdPhoneNumber);
  }

  // @Input("appCountryCode") set checkCountryCode(phoneNumber: string) {
  //   this.countryCode = phoneNumber.slice(0, phoneNumber.indexOf("-"));

  //   if (this.countryCode === "+65") {
  //     this.country = this.renderer.createText("Singapore");
  //   } else if (this.countryCode === "+91") {
  //     this.country = this.renderer.createText("India");
  //   }

  //   this.renderer.appendChild(this.tdPhoneNumber.nativeElement, this.country);
  // }
}
