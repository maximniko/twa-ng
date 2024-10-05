import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {routeCreator} from "../../my-money.routes";
import {TwaService} from "../../../../common/services/twa.service";
import {PaginationComponent} from "../_layout/period/pagination.component";
import {SelectorComponent} from "../_layout/period/selector.component";
import {Category} from "../../domains/categories/interfaces/category";
import {Transaction} from "../../domains/transactions/interfaces/transaction";
import {TransactionsService} from "../../domains/transactions/services/transactions.service";
import {TransactionsFilter} from "../../domains/transactions/services/transactions-filter";
import {DoughnutComponent} from "../charts/_includes/chart-transactions/chart/doughnut.component";
import {ListComponent} from "../charts/_includes/chart-transactions/list/list.component";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, DoughnutComponent, ListComponent, PaginationComponent, SelectorComponent, DoughnutComponent, ListComponent],
  templateUrl: './chart-category.component.html',
  host: {class: 'd-flex flex-column h-100'},
})
export class ChartCategoryComponent implements OnInit {
  categoryItem!: Category
  transactions: Transaction[] = []

  constructor(
    private twa: TwaService,
    private service: TransactionsService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.data
      .subscribe(
        (data: any) => {
          this.categoryItem = data['categoryItem']
          this.service.list(new TransactionsFilter({categoryId: this.categoryItem.id})).subscribe(
            items => this.transactions = items
          )
        }
      )
  }

  ngOnInit(): void {
    this.twa.visibleBackButton(false)
    this.twa.setMainButton({text: 'Add transaction', is_active: true, is_visible: true, has_shine_effect: true}, () => {

    })
  }

  protected readonly routeCreator = routeCreator;
}
