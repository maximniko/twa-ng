import {Injectable} from '@angular/core';
import {Category, CATEGORY_MAX_ID, categoryGenerator} from "../interfaces/category";
import {Observable, of} from "rxjs";
import {CategoriesInterface} from "./categories-interface";
import {CategoriesFilter} from "./categories-filter";

@Injectable({providedIn: 'root'})
export class CategoriesDevService implements CategoriesInterface {

  item(filter: CategoriesFilter): Observable<Category | undefined> {
    return of(this.dummy.find((category: Category) => filter.filter(category)))
  }

  list(filter: CategoriesFilter): Observable<Category[]> {
    return of(this.dummy)
  }

  private readonly dummy: Category[] = [...Array(CATEGORY_MAX_ID).keys()].map((i) => categoryGenerator(i + 1))
}
