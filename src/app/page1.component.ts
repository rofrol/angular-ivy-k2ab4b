import { Component, Input } from "@angular/core";

@Component({
  selector: "page1",
  template: `
    page1
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class Page1Component {
  @Input() name: string;
}
