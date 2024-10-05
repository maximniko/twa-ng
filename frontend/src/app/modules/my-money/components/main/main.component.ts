import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routeCreator} from "../../my-money.routes";
import {TwaService} from "../../../../common/services/twa.service";
import {symbols} from "../../../../common/components/symbols/symbols";
import {DoughnutComponent} from "../charts/_includes/chart-categories/chart/doughnut.component";
import {ListComponent} from "../charts/_includes/chart-categories/list/list.component";
import {ChartCategoriesFilter} from "../../domains/charts/services/chart-categories-filter";
import {ChartCategoriesService} from "../../domains/charts/services/chart-categories.service";
import {ChartCategory} from "../../domains/charts/interfaces/chart-category";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, DoughnutComponent, ListComponent],
  templateUrl: './main.component.html',
  host: {class: 'd-flex flex-column h-100'},
})
export class MainComponent implements OnInit {
  protected chartCategories: ChartCategory[] = []

  constructor(
    private twa: TwaService,
    private service: ChartCategoriesService,
  ) {
    this.service.list(new ChartCategoriesFilter({})).subscribe(
      items => this.chartCategories = items
    )
  }

  ngOnInit(): void {
    this.initChartCategories()
    this.twa.visibleBackButton(false)
    this.twa.setMainButton({text: 'Add transaction', is_active: true, is_visible: true, has_shine_effect: true}, () => {

    })
  }

  private initChartCategories() {
    // this.chartCategories = this.service.list(new ChartCategoriesFilter({}))
  }

  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;
}
