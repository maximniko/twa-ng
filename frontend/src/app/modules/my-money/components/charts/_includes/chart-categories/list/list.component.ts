import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ChartCategory} from "../../../../../domains/charts/interfaces/chart-category";
import {routeCreator} from "../../../../../my-money.routes";
import {symbols} from "../../../../../../../common/components/symbols/symbols";

@Component({
  selector: 'chart-categories-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() chartCategories: ChartCategory[] = []
  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;
}
