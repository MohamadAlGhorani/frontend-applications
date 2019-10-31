import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-thema",
  templateUrl: "./thema.component.html",
  styleUrls: ["./thema.component.scss"],
  template: `
    <p class="thema">
      Thema van de maand: <span>{{ thema }}</span>
    </p>
  `
})
export class ThemaComponent implements OnInit {
  @Input("thema-var") thema: string;
  constructor() {}

  ngOnInit() {}
}
