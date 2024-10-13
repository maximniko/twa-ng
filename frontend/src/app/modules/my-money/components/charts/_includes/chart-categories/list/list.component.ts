import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {ChartCategory} from "../../../../../domains/charts/interfaces/chart-category";
import {routeCreator} from "../../../../../my-money.routes";
import {symbols} from "../../../../../../../common/components/symbols/symbols";
import {Localisation} from "../../../../../../../common/services/localisation";

@Component({
  selector: 'chart-categories-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() chartCategories: ChartCategory[] = []

  constructor(
    protected localisation: Localisation,
  ) {
  }
  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;
}
