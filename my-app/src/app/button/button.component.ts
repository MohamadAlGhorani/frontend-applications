import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  template: `
    <button (click)="addClassName()">Hint</button>
  `
})
export class ButtonComponent implements OnInit {
  @Output() addedClassName = new EventEmitter<String>();
  addClassName(value: String) {
    this.addedClassName.emit(value);
  }
  constructor() {}

  ngOnInit() {}
}
