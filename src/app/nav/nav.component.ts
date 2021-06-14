import { Component, OnInit } from '@angular/core';

export class ToolbarOverviewExample {}
export class IconOverviewExample {}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  icon: string = "grading";
  plusOneIconToggle() {
    this.icon = "plus_one";
    setTimeout(() => {
      this.icon = "grading";
    }, 500);
  };
  NegOneIconToggle() {
    this.icon = "exposure_neg_1";
    setTimeout(() => {
      this.icon = "grading";
    }, 500);
  };
}
