import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'period-selector',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="form-floating ms-auto">
      <select class="form-select rounded-4" id="period" aria-label="Select period">
        <option value="1" selected>Day</option>
        <option value="2">Week</option>
        <option value="3">Month</option>
      </select>
      <label for="period">Period</label>
    </div>`,
})
export class SelectorComponent {
}
