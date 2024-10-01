import {Injectable} from '@angular/core';
import {Category, CATEGORY_MAX_ID, categoryGenerator} from "../interfaces/category";
import {Observable, of} from "rxjs";
import {CategoriesInterface} from "./categories-interface";
import {CategoriesFilter} from "./categories-filter";

@Injectable({providedIn: 'root'})
export class CategoriesDevService implements CategoriesInterface {

  private dummy: Category[] = [...Array(CATEGORY_MAX_ID).keys()].map((i) => categoryGenerator(i + 1))

  item(filter: CategoriesFilter): Observable<Category|undefined> {
    return of(this.dummy.find((category: Category) => filter.filter(category))!)
  }

  list(filter: CategoriesFilter): Observable<Category[]> {
    return of(this.dummy.filter((item: Category) => filter.filter(item)))
  }

  create(category: Category): Observable<Category> {
    if (!category.id) {
      category.id = Math.max(...this.dummy.map((item: Category) => item.id!)) + 1
    }
    this.dummy.push(category)
    return of(category);
  }

  edit(category: Category): Observable<Category> {
    const index = this.dummy.findIndex((item: Category) => item.id == category.id)
    if (index != -1) {
      this.dummy[index] = category
    }
    return of(category);
  }
}
