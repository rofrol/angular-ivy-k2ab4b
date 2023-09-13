import { Component, Input } from "@angular/core";

@Component({
  selector: "page2",
  template: `
    page2
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class Page2Component {
  @Input() name: string;
}
