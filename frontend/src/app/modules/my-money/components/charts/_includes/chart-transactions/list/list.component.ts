import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routeCreator} from "../../../../../my-money.routes";
import {symbols} from "../../../../../../../common/components/symbols/symbols";
import {Transaction} from "../../../../../domains/transactions/interfaces/transaction";

@Component({
  selector: 'chart-transactions-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() transactions: Transaction[] = []
  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;
}
