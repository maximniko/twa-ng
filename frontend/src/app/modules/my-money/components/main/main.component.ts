import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routeCreator} from "../../my-money.routes";
import {TwaService} from "../../../../common/services/twa.service";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
  host: {class: 'd-flex flex-column h-100'},
})
export class MainComponent implements OnInit {
  constructor(private twa: TwaService) {
  }

  ngOnInit() {
    this.twa.visibleBackButton(false)
  }

  protected readonly routeCreator = routeCreator;
}
