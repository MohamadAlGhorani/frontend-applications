import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  template: `
    <form action="">
      <input
        (click)="check('Afrika')"
        class="keuze"
        type="radio"
        name="keuze"
        value="Geografische herkomst"
        id="afrika"
      />
      <label for="afrika">Afrika</label>
      <input
        (click)="check('Indonesië')"
        class="keuze"
        type="radio"
        name="keuze"
        value="Indonesië"
        id="indonisie"
      />
      <label for="indonisie">Indonisie</label>
      <input
        (click)="check('India')"
        class="keuze"
        type="radio"
        name="keuze"
        value="India"
        id="india"
      />
      <label for="india">India</label>
    </form>
  `
})
export class CheckboxComponent implements OnInit {
  @Output() checked = new EventEmitter<String>();
  check(value: String) {
    this.checked.emit(value);
  }
  constructor() {}

  ngOnInit() {}
}
