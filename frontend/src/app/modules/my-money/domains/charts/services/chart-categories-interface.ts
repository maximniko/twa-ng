import {Observable} from "rxjs";
import {ChartCategory} from "../interfaces/chart-category";
import {ChartCategoriesFilter} from "./chart-categories-filter";

export interface ChartCategoriesInterface {
  list(filter: ChartCategoriesFilter): Observable<ChartCategory[]>

  item(filter: ChartCategoriesFilter): Observable<ChartCategory|undefined>
}
