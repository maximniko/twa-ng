import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {symbols} from "../../../../../common/components/symbols/symbols";

@Component({
  selector: 'period-pagination',
  standalone: true,
  imports: [CommonModule],
  host: {class: 'sticky-bottom'},
  template: `
    <nav aria-label="Page navigation" class="p-2 bg-blur">
      <ul class="pagination pagination-lg jcb m-0 w-100">
        <li class="page-item"><a class="page-link color-accent" href="#">
          <svg class="bi">
            <use [attr.xlink:href]="'#' + symbols.chevronLeft"/>
          </svg>
        </a></li>
        <li class="w-100 text-center"><a href="#" class="page-link color-accent">Current</a></li>
        <li class="page-item">
          <a class="page-link color-accent" href="#">
            <svg class="bi">
              <use [attr.xlink:href]="'#' + symbols.chevronRight"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>`,
})
export class PaginationComponent {
  protected readonly symbols = symbols;
}
