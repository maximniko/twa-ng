import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {ChartCategory} from "../../../../../domains/charts/interfaces/chart-category";
import {routeCreator} from "../../../../../my-money.routes";
import {symbols} from "../../../../../../../common/components/symbols/symbols";
import {TwaService} from "../../../../../../../common/services/twa.service";
import {Category} from "../../../../../domains/categories/interfaces/category";

@Component({
  selector: 'chart-categories-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() chartCategories: ChartCategory[] = []
  constructor(private twa: TwaService) {
  }

  popup(category: Category) {
    this.twa.showPopup({
      title: `Category Info: ${category.title}`.slice(0, 64),
        message: category.description.slice(0, 256),
        buttons: [{type: 'close'}]
    }, () => {})
  }
  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;
}
