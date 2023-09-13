import { Component, VERSION } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "";

  constructor(router: Router, route: ActivatedRoute) {
    router.events.forEach(e => {
      if (e instanceof NavigationEnd) {
        this.title = route.root.firstChild.snapshot.data.title;
      }
    });
  }
}
