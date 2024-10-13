import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Transaction} from "../../../domains/transactions/interfaces/transaction";
import {FilterService} from "../../../domains/charts/services/filter.service";
import {SettingsService} from "../../../domains/setting/services/settings.service";
import {Localisation} from "../../../../../common/services/localisation";

@Component({
  selector: 'main-available',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-3 rounded-3 tg-bg-secondary">
      <div class="progress"
           role="progressbar"
           aria-label="Example with label"
           [attr.aria-valuenow]="available.valuenow"
           [attr.aria-valuemax]="available.valuemax" aria-valuemin="0">
        <div class="progress-bar" [ngClass]="{
        'bg-success': available.percent > 0,
        'bg-warning': available.percent > 40 ,
        'bg-danger': available.percent > 64,
        }"
             style="width: {{ available.percent | number: '1.1-1' }}%">{{ available.percent | number: '1.1-1' }}%
        </div>
      </div>
      <div class="jcb pt-3">
        <div>{{ localisation.t.Spent }}: {{ available.valuenow | number: '1.1-1' }}</div>
        <div>{{ localisation.t.Available }}: {{ available.valuemax - available.valuenow | number: '1.1-1' }}</div>
      </div>
    </div>
  `,
})
export class AvailableComponent implements OnInit, OnChanges {
  @Input() transactions!: Transaction[]

  available: Available = {
    percent: 0,
    valuenow: 0,
    valuemax: 0,
  }

  constructor(
    protected localisation: Localisation,
    protected settings: SettingsService,
    protected filter: FilterService,
  ) {
  }

  ngOnInit() {
    this.calculateExisting(this.transactions)
  }

  private calculateExisting(transactions: Transaction[]) {
    if (!transactions.length) {
      return
    }

    const available: Available = transactions.reduce<Available>(
      (acc: Available, item: Transaction) => {
        acc.valuenow += item.total
        return acc
      }, <Available>{
        percent: 0,
        valuenow: 0,
        valuemax: 0,
      })
    available.valuemax = this.settings.item().maxPerMonth * this.filter.coefficient
    available.percent = available.valuenow / available.valuemax * 100

    this.available = available
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["transactions"]) {
      this.calculateExisting(this.transactions)
    }
  }
}

interface Available {
  percent: number,
  valuenow: number,
  valuemax: number,
}
