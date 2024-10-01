import {Injectable} from '@angular/core';
import {Category} from "../interfaces/category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoriesInterface} from "./categories-interface";
import {CategoriesFilter} from "./categories-filter";

@Injectable({providedIn: 'root'})
export class CategoriesService implements CategoriesInterface {
  constructor(private readonly httpClient: HttpClient) {
  }

  create(category: Category) {
    return this.httpClient.post<Category>('/backend/categories/create', category)
  }

  edit(category: Category) {
    return this.httpClient.patch<Category>('/backend/categories/edit', category)
  }

  list(filter: CategoriesFilter): Observable<Category[]> {
    return this.httpClient.get<Category[]>('/backend/categories', {
      params: filter.toHttpParams(),
    })
  }

  item(filter: CategoriesFilter): Observable<Category> {
    return this.httpClient.get<Category>(`/backend/categories/get`, {
      params: filter.toHttpParams(),
    })
  }
}
