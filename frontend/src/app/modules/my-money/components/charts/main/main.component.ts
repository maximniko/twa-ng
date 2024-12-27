import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
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
import {debounceTime, Subscription} from "rxjs";
import {FilterService} from "../../../domains/charts/services/filter.service";
import {FromTo} from "../../../domains/charts/interfaces/from-to";
import {Localisation} from "../../../../../common/services/localisation";
import {IntroComponent} from "../../_layout/intro/intro.component";

@Component({
  standalone: true,
  imports: [CommonModule, DoughnutComponent, ListComponent, SelectorComponent, PaginationComponent, IntroComponent],
  templateUrl: './main.component.html',
  host: {class: 'd-flex flex-column h-100'},
})
export class MainComponent implements OnInit, OnDestroy {
  protected chartCategories: ChartCategory[] = []
  protected filterSubscription?: Subscription

  constructor(
    protected twa: TwaService,
    protected filter: FilterService,
    protected localisation: Localisation,
    protected location: Location,
    protected service: ChartCategoriesService,
    protected router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadChartCategories(this.filter.fromTo)

    this.filterSubscription = this.filter.nextFromTo
      .pipe(debounceTime(1000))
      .subscribe((fromTo: FromTo) => this.loadChartCategories(fromTo))

    this.twa.backButtonOnClick(() => this.goBack())
    this.twa.setMainButton(
      {text: this.localisation.t.Add ?? 'Add', is_active: true, is_visible: true, has_shine_effect: true},
      () => this.onMainClick()
    )
  }

  ngOnDestroy(): void {
    this.twa.offMainButton(() => this.onMainClick())
    this.twa.offBackButton(() => this.goBack())
    this.filterSubscription?.unsubscribe()
  }

  goBack() {
    this.location.back()
  }

  onMainClick() {
    this.router.navigate([routeCreator.transactionAdd()])
  }

  private loadChartCategories(fromTo: FromTo) {
    this.service.list(new ChartCategoriesFilter(fromTo))
      .subscribe(items => this.chartCategories = items)
  }

  protected readonly routeCreator = routeCreator;
}
