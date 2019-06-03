import { Component } from "@angular/core";

interface Card {
  title: string;
  text: string;
  buttonText: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "demo";
  cards: Card[] = [
    {
      title: "Harry Potter",
      text: "A boy learns magic",
      buttonText: "wizard"
    },
    {
      title: "airplane",
      text: "string",
      buttonText: "example"
    },
    {
      title: "example",
      text: "lol",
      buttonText: "oo"
    }
  ];
}
