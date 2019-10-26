import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  template: `
    <button>Hint</button>
  `
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
