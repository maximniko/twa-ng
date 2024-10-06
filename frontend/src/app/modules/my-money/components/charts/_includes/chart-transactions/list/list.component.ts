import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {routeCreator} from "../../../../../my-money.routes";
import {symbols} from "../../../../../../../common/components/symbols/symbols";
import {Transaction} from "../../../../../domains/transactions/interfaces/transaction";
import {getColor} from "../../../../../../../common/interfaces/colors";
import {toLocalDate} from "../../../../../../../common/extensions/Date";
import {TwaService} from "../../../../../../../common/services/twa.service";

@Component({
  selector: 'chart-transactions-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() transactions: Transaction[] = []

  constructor(private twa: TwaService) {
  }

  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;
  protected readonly getColor = getColor;
  protected readonly toLocalDate = (date: Date) => {
    return toLocalDate(date, this.twa.getUserLanguageCode())
  };
}
