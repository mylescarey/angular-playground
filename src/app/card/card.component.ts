import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() buttonText: string;
  constructor() {}

  changeTitle() {
    this.title = "Hello";
  }

  changeTitle2() {
    this.title = this.text.substr(0, 5);
  }

  ngOnInit() {}
}
