import {HttpParams} from "@angular/common/http";
import {Category} from "../interfaces/category";
import {HttpParamsOptionsFromObject} from "../../../../../common/components/filters/interfaces/filter-interface";

export class CategoriesFilter {
  private readonly id?: number

  constructor(params: {
    id?: number;
  }) {
    this.id = params.id
  }

  toHttpParams(): HttpParams {
    const fromObject: HttpParamsOptionsFromObject = {}

    if (this.id) {
      fromObject['id'] = this.id
    }

    return new HttpParams({fromObject: fromObject})
  }

  filter(item: Category): boolean {
    if (this.id) {
      return item.id == this.id
    }
    return false
  }
}
