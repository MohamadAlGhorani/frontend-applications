import { Component, ElementRef, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
  template: `
    <img class="object-image" src="{{ srcName }}" alt="" />
  `
})
export class ImageComponent implements OnInit {
  @Input("src") srcName: string;
  constructor(public element: ElementRef) {
    this.element.nativeElement; // <- your direct element reference
  }
  ngOnInit() {
    var el = this.element.nativeElement;
    // console.log(el);
  }
}
