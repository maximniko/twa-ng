import {Observable} from "rxjs";
import {Category} from "../interfaces/category";
import {CategoriesFilter} from "./categories-filter";

export interface CategoriesInterface {
  list(filter: CategoriesFilter): Observable<Category[]>

  item(filter: CategoriesFilter): Observable<Category | undefined>
}
