import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {FilterService} from "../../../domains/charts/services/filter.service";

@Component({
  selector: 'period-pagination',
  standalone: true,
  imports: [CommonModule],
  host: {class: 'sticky-bottom'},
  template: `
    <nav aria-label="Page navigation" class="p-2 bg-blur">
      <ul class="pagination pagination-lg jcb m-0 w-100">
        <li class="page-item">
          <span class="page-link color-accent" (click)="filter.pageNext()" [ngClass]="{'disabled': filter.isLastPage()}">
            <svg class="bi">
              <use [attr.xlink:href]="'#' + symbols.chevronLeft"/>
            </svg>
          </span>
        </li>
        <li class="w-100 text-center"><a href="#" class="page-link color-accent">{{ filter.getPeriodString() }}</a></li>
        <li class="page-item" [ngClass]="{'disabled': filter.isFirstPage()}">
          <span class="page-link color-accent" (click)="filter.pagePrev()" >
            <svg class="bi">
              <use [attr.xlink:href]="'#' + symbols.chevronRight"/>
            </svg>
          </span>
        </li>
      </ul>
    </nav>`,
})
export class PaginationComponent {
  constructor(protected filter: FilterService) {
  }
  protected readonly symbols = symbols;
}
