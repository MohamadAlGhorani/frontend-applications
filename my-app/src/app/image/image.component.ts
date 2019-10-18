import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"]
})
export class ImageComponent implements OnInit {
  constructor(public element: ElementRef) {
    this.element.nativeElement; // <- your direct element reference
  }
  ngOnInit() {
    var el = this.element.nativeElement;
    console.log(el);
  }
}
