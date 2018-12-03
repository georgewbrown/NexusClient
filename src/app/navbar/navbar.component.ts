import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger("collapse", [
      state("open", style({
        opacity: "1",
        display: "block",
        transform: "translateX(0)"
      })),
      state("closed", style({
        opacity: "0",
        display: "none",
        transform: "translateX(-50%)"
      })),
      transition("closed => open", animate("500ms ease-in")),
      transition("open => closed", animate("400ms ease-out"))
    ])
  ]
})

export class NavbarComponent implements OnInit {
  collapse: string = "closed";

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
  }

}