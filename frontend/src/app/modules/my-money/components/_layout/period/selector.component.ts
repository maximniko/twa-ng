import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterService, Period} from "../../../domains/charts/services/filter.service";
import {FormsModule} from "@angular/forms";
import {Localisation} from "../../../../../common/services/localisation";

@Component({
  selector: 'period-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-floating ms-auto">
      <select class="form-select rounded-4" id="period" aria-label="Select period" [(ngModel)]="filter.period">
        <option [ngValue]="Period.day">{{ localisation.t.Day ?? 'Day' }}</option>
        <option [ngValue]="Period.week">{{ localisation.t.Week ?? 'Week' }}</option>
        <option [ngValue]="Period.month">{{ localisation.t.Month ?? 'Month' }}</option>
      </select>
      <label for="period">{{ localisation.t.Period ?? 'Period' }}</label>
    </div>`,
})
export class SelectorComponent {
  constructor(
    protected filter: FilterService,
    protected localisation: Localisation,
  ) {
  }

  protected readonly Period = Period;
}
