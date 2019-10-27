import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hint",
  templateUrl: "./hint.component.html",
  styleUrls: ["./hint.component.scss"],
  template: `
    <p class=" hint {{ hintClassName }}">{{ title }}</p>
  `
})
export class HintComponent implements OnInit {
  @Input("title-var") title: string;
  @Input("hintClassName-var") hintClassName: string;
  constructor() {}

  ngOnInit() {}
}
