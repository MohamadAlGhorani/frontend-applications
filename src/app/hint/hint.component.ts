import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hint",
  styleUrls: ["./hint.component.scss"],
  template: `
    <p class=" hint {{ hintClassName }}">Dit was: {{ title }}</p>
    <p class=" answer {{ answerClassName }}">
      En Komt uit: <span>{{ herkomst }} </span>
    </p>
  `
})
export class HintComponent implements OnInit {
  @Input("title-var") title: string;
  @Input("herkomst-var") herkomst: string;
  @Input("hintClassName-var") hintClassName: string;
  @Input("answerClassName-var") answerClassName: string;
  constructor() {}

  ngOnInit() {}
}
