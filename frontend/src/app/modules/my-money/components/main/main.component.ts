import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routeCreator} from "../../my-money.routes";
import {TwaService} from "../../../../common/services/twa.service";
import {symbols} from "../../../../common/components/symbols/symbols";
import {ChartComponent} from "./chart/chart.component";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ChartComponent],
  templateUrl: './main.component.html',
  host: {class: 'd-flex flex-column h-100'},
})
export class MainComponent implements OnInit {
  constructor(private twa: TwaService) {
  }

  ngOnInit() {
    this.twa.visibleBackButton(false)
    this.twa.setMainButton({text: 'Add transaction', is_active: true, is_visible: true, has_shine_effect: true}, () => {})
  }

  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;
}
