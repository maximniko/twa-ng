import {Injectable} from '@angular/core';
import {ChartCategory, chartCategoryGenerator} from "../interfaces/chart-category";
import {Observable, of} from "rxjs";
import {ChartCategoriesInterface} from "./chart-categories-interface";
import {ChartCategoriesFilter} from "./chart-categories-filter";
import {CATEGORY_MAX_ID} from "../../categories/interfaces/category";

@Injectable({providedIn: 'root'})
export class ChartCategoriesDevService implements ChartCategoriesInterface {

  private dummy: ChartCategory[] = [...Array(CATEGORY_MAX_ID).keys()].map((i) => chartCategoryGenerator(i + 1))

  item(filter: ChartCategoriesFilter): Observable<ChartCategory | undefined> {
    return of(this.dummy.find((transaction: ChartCategory) => filter.filter(transaction))!)
  }

  list(filter: ChartCategoriesFilter): Observable<ChartCategory[]> {
    return of(this.dummy.filter((item: ChartCategory) => filter.filter(item)))
  }
}
