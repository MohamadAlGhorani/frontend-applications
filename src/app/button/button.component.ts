import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-button",
  styleUrls: ["./button.component.scss"],
  template: `
    <button (click)="addClassName()">
      <span>{{ hintAantal }}</span> {{ buttonLabel }}
    </button>
  `
})
export class ButtonComponent implements OnInit {
  @Input("hint-var") hintAantal: string;
  @Input("button-var") buttonLabel: string;
  @Output() addedClassName = new EventEmitter<String>();
  addClassName(value: String) {
    this.addedClassName.emit(value);
  }
  constructor() {}

  ngOnInit() {}
}
