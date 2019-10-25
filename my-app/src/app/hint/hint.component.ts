import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hint",
  templateUrl: "./hint.component.html",
  styleUrls: ["./hint.component.scss"],
  template: `
    <p>{{ title }}</p>
  `
})
export class HintComponent implements OnInit {
  @Input("title-var") title: string;
  constructor() {}

  ngOnInit() {}
}
