import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-score",
  styleUrls: ["./score.component.scss"],
  template: `
    <p>
      score: <span>{{ score }}</span>
    </p>
  `
})
export class ScoreComponent implements OnInit {
  @Input("score-var") score: string;
  constructor() {}

  ngOnInit() {}
}
