import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterService, Period} from "../../../domains/charts/services/filter.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'period-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-floating ms-auto">
      <select class="form-select rounded-4" id="period" aria-label="Select period" [(ngModel)]="filter.period">
        <option [ngValue]="Period.day">Day</option>
        <option [ngValue]="Period.week">Week</option>
        <option [ngValue]="Period.month">Month</option>
      </select>
      <label for="period">Period</label>
    </div>`,
})
export class SelectorComponent {
  constructor(protected filter: FilterService) {
  }

  protected setPeriod(period: Period): void {
    console.log(period)
    this.filter.period = period
  }

  protected isSelected(period: Period): boolean {
    return this.filter.period == period
  }

  protected readonly Period = Period;
}
