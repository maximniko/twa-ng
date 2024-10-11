import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {routeCreator} from "../../my-money.routes";
import {TwaService} from "../../../../common/services/twa.service";
import {SelectorComponent} from "../_layout/period/selector.component";
import {debounceTime, Subscription} from "rxjs";
import {FilterService} from "../../domains/charts/services/filter.service";
import {FromTo} from "../../domains/charts/interfaces/from-to";
import {Localisation} from "../../../../common/services/localisation";
import {IntroComponent} from "../_layout/intro/intro.component";
import {TransactionsListComponent} from "../transactions/_includes/list/transactions-list.component";
import {TransactionsService} from "../../domains/transactions/services/transactions.service";
import {TransactionsFilter} from "../../domains/transactions/services/transactions-filter";
import {Transaction} from "../../domains/transactions/interfaces/transaction";

@Component({
  standalone: true,
  imports: [CommonModule, TransactionsListComponent, SelectorComponent, IntroComponent],
  templateUrl: './main.component.html',
  host: {class: 'd-flex flex-column h-100'},
})
export class MainComponent implements OnInit, OnDestroy {
  protected transactions: Transaction[] = []
  protected filterSubscription?: Subscription

  constructor(
    protected twa: TwaService,
    protected filter: FilterService,
    protected localisation: Localisation,
    protected service: TransactionsService,
    protected router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadTransactions(this.filter.fromTo)

    this.filterSubscription = this.filter.nextFromTo
      .pipe(debounceTime(1000))
      .subscribe((fromTo: FromTo) => this.loadTransactions(fromTo))

    this.twa.visibleBackButton(false)
    this.twa.setMainButton(
      {text: 'Add transaction', is_active: true, is_visible: true, has_shine_effect: true},
      () => this.onMainClick()
    )
  }

  ngOnDestroy(): void {
    this.twa.offMainButton(() => this.onMainClick())
    this.filterSubscription?.unsubscribe()
  }

  onMainClick() {
    this.router.navigate([routeCreator.transactionAdd()])
  }

  private loadTransactions(fromTo: FromTo) {
    this.service.list(new TransactionsFilter(fromTo))
      .subscribe(items => this.transactions = items)
  }

  protected readonly routeCreator = routeCreator;
}
