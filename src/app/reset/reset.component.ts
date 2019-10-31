import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-reset",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.scss"],
  template: `
    <button (click)="reset()">
      Opnieuw
    </button>
  `
})
export class ResetComponent implements OnInit {
  @Output() reseted = new EventEmitter<String>();
  reset(value: String) {
    this.reseted.emit(value);
  }
  constructor() {}

  ngOnInit() {}
}
