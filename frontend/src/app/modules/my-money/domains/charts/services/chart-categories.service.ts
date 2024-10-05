import {Injectable} from '@angular/core';
import {ChartCategory} from "../interfaces/chart-category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ChartCategoriesInterface} from "./chart-categories-interface";
import {ChartCategoriesFilter} from "./chart-categories-filter";

@Injectable({providedIn: 'root'})
export class ChartCategoriesService implements ChartCategoriesInterface {
  constructor(private readonly httpClient: HttpClient) {
  }

  list(filter: ChartCategoriesFilter): Observable<ChartCategory[]> {
    return this.httpClient.get<ChartCategory[]>('/backend/chart-categories', {
      params: filter.toHttpParams(),
    })
  }

  item(filter: ChartCategoriesFilter): Observable<ChartCategory> {
    return this.httpClient.get<ChartCategory>(`/backend/chart-categories/get`, {
      params: filter.toHttpParams(),
    })
  }
}
