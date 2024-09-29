import {inject, Injectable} from '@angular/core';
import {Category} from "../interfaces/category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoriesInterface} from "./categories-interface";
import {CategoriesFilter} from "./categories-filter";
import {TwaService} from "../../../../../common/services/twa.service";

@Injectable({providedIn: 'root'})
export class CategoriesService implements CategoriesInterface {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly twa: TwaService = inject(TwaService),
  ) {
  }

  list(filter: CategoriesFilter): Observable<Category[]> {
    return this.httpClient.get<Category[]>('/backend/categories', {
      params: filter.toHttpParams(),
      headers: {
        'Authorization': `twa ${this.twa.getInitData()}`
      },
    })
  }

  item(filter: CategoriesFilter): Observable<Category | undefined> {
    return this.httpClient.get<Category>(`/backend/categories/get`, {
      params: filter.toHttpParams(),
    })
  }
}
