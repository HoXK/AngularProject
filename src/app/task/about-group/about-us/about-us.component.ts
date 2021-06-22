import { Component, OnInit } from "@angular/core";
import { AboutService } from "src/app/_services/about.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent implements OnInit {
  people: any;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.aboutService.currentObject.subscribe(
      (people) => (this.people = people)
    );
  }
}
