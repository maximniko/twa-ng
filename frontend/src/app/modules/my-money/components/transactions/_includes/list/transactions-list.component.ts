import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {routeCreator} from "../../../../my-money.routes";
import {symbols} from "../../../../../../common/components/symbols/symbols";
import {getColor} from "../../../../../../common/interfaces/colors";
import {toLocalDate} from "../../../../../../common/extensions/Date";
import {TwaService} from "../../../../../../common/services/twa.service";
import {Transaction} from "../../../../domains/transactions/interfaces/transaction";
import {Localisation} from "../../../../../../common/services/localisation";

@Component({
  selector: 'transactions-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './transactions-list.component.html',
})
export class TransactionsListComponent {
  @Input() transactions!: Transaction[]
  constructor(
    private twa: TwaService,
    protected localisation: Localisation,
  ) {
  }

  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;
  protected readonly getColor = getColor;
  protected readonly toLocalDate = (date: Date) => {
    return toLocalDate(date, this.twa.getUserLanguageCode())
  };
}
