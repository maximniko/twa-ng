import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {routeCreator} from "../../../my-money.routes";
import {TwaService} from "../../../../../common/services/twa.service";
import {PaginationComponent} from "../../_layout/period/pagination.component";
import {SelectorComponent} from "../../_layout/period/selector.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {Transaction} from "../../../domains/transactions/interfaces/transaction";
import {TransactionsService} from "../../../domains/transactions/services/transactions.service";
import {TransactionsFilter} from "../../../domains/transactions/services/transactions-filter";
import {DoughnutComponent} from "../_includes/chart-transactions/chart/doughnut.component";
import {ListComponent} from "../_includes/chart-transactions/list/list.component";
import {Subscription} from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule, DoughnutComponent, ListComponent, PaginationComponent, SelectorComponent],
  templateUrl: './chart-category.component.html',
  host: {class: 'd-flex flex-column h-100'},
})
export class ChartCategoryComponent implements OnInit, OnDestroy {
  title!: string
  categoryItem!: Category
  transactions: Transaction[] = []
  private serviceSubscription?: Subscription

  constructor(
    protected twa: TwaService,
    protected service: TransactionsService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) {
    this.activatedRoute.data
      .subscribe(
        (data: any) => {
          this.categoryItem = data['categoryItem']
          this.serviceSubscription = this.service.list(new TransactionsFilter({categoryId: this.categoryItem.id}))
            .subscribe(items => this.transactions = items)
        }
      )
  }

  ngOnInit(): void {
    this.twa.backButtonOnClick(() => this.goBack())
    this.twa.setMainButton(
      {text: 'Add transaction', is_active: true, is_visible: true, has_shine_effect: true},
      () => this.onMainClick(),
    )
  }

  ngOnDestroy(): void {
    this.serviceSubscription?.unsubscribe()
    this.twa.offMainButton(() => this.onMainClick())
    this.twa.offBackButton(() => this.goBack())
  }

  goBack() {
    this.router.navigate([routeCreator.main()])
  }

  onMainClick() {
    this.router.navigate([routeCreator.transactionAddByCategory(this.categoryItem)])
  }

  protected readonly routeCreator = routeCreator;
}
