import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { MatCardModule } from '@angular/material/card'

import { AppComponent } from "./app.component";
import { Page1Component } from "./page1.component";
import { Page2Component } from "./page2.component";

const routes: Routes = [
  { path: "", component: Page1Component, data :{ title:"page1"} },
  { path: "page2", component: Page2Component, data :{ title:"page2"} }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), MatCardModule],
  declarations: [AppComponent, Page1Component, Page1Component, Page2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
