import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {routeCreator} from "../../../my-money.routes";
import {TwaService} from "../../../../../common/services/twa.service";
import {DoughnutComponent} from "../_includes/chart-categories/chart/doughnut.component";
import {ListComponent} from "../_includes/chart-categories/list/list.component";
import {ChartCategoriesFilter} from "../../../domains/charts/services/chart-categories-filter";
import {ChartCategoriesService} from "../../../domains/charts/services/chart-categories.service";
import {ChartCategory} from "../../../domains/charts/interfaces/chart-category";
import {SelectorComponent} from "../../_layout/period/selector.component";
import {PaginationComponent} from "../../_layout/period/pagination.component";

@Component({
  standalone: true,
  imports: [CommonModule, DoughnutComponent, ListComponent, SelectorComponent, PaginationComponent],
  templateUrl: './main.component.html',
  host: {class: 'd-flex flex-column h-100'},
})
export class MainComponent implements OnInit, OnDestroy {
  protected chartCategories: ChartCategory[] = []

  constructor(
    private twa: TwaService,
    private service: ChartCategoriesService,
    private router: Router
  ) {
    this.onMainClick = this.onMainClick.bind(this)
  }

  ngOnInit(): void {
    this.initChartCategories()
    this.twa.visibleBackButton(false)
    this.twa.setMainButton(
      {text: 'Add transaction', is_active: true, is_visible: true, has_shine_effect: true},
      this.onMainClick
    )
  }

  ngOnDestroy(): void {
    this.twa.offMainButton(this.onMainClick)
    this.twa.close()
  }

  onMainClick() {
    this.router.navigate([routeCreator.transactionAdd()])
  }

  private initChartCategories() {
    this.service.list(new ChartCategoriesFilter({})).subscribe(
      items => this.chartCategories = items
    )
  }

  protected readonly routeCreator = routeCreator;
}
