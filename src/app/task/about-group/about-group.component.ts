import { Component, OnInit } from "@angular/core";
import { AboutService } from "src/app/_services/about.service";

@Component({
  selector: "app-about-group",
  templateUrl: "./about-group.component.html",
  styleUrls: ["./about-group.component.css"],
})
export class AboutGroupComponent implements OnInit {
  people = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    //this.aboutService.currentObject.subscribe(people => this.people = people);
  }

  getPeople() {
    this.people = [
      {
        heading: "Main Designer",
        description:
          "Charlie Vixien is our main Engineer. She has 12 years of experience in the industry. She has quite the eye for catching vibrant colors and put them in to her daily work.",
        img: "assets/images/people/designer.jpg",
        button: "View More",
      },
      {
        heading: "Main Blogger",
        description:
          "Meet our main blogger of the site, Mark Branden. He's a proffesional blogger who has over 10 years experience in the industry. He also likes to explore new technologies. ",
        img: "assets/images/people/blogger.jpg",
        button: "View More",
      },
      {
        heading: "Director",
        description:
          "Duke Vandall who's our company director, grows his business by assuring their company marketing budget is invested in the right places. He has over 20 years experience. ",
        img: "assets/images/people/director.jpg",
        button: "View More",
      },
      {
        heading: "Software Engineer",
        description:
          "Christoper John is an experinced software engineer in the industry who has 15 years experience in the industry. He's well known for his IT knowledge about multiple systems.",
        img: "assets/images/people/engineer.jpg",
        button: "View More",
      },
    ];
    this.aboutService.emitPeopleData(this.people);
    console.log(this.people);
  }
}
