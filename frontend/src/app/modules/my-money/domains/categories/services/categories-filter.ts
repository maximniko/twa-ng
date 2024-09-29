import {HttpParams} from "@angular/common/http";
import {Category} from "../interfaces/category";
import {HttpParamsOptionsFromObject} from "../../../../../common/components/filters/interfaces/filter-interface";

export class CategoriesFilter {
  private readonly id?: number
  private readonly alias?: string

  constructor(params: {
    id?: number;
    alias?: string;
  }) {
    this.id = params.id
    this.alias = params.alias
  }

  toHttpParams(): HttpParams {
    const fromObject: HttpParamsOptionsFromObject = {}

    if (this.id) {
      fromObject['id'] = this.id
    }
    if (this.alias) {
      fromObject['alias'] = this.alias
    }

    return new HttpParams({fromObject: fromObject})
  }

  filter(item: Category): boolean {
    if (item.id == this.id) {
      return true
    }
    if (item.alias == this.alias) {
      return true
    }

    return false
  }
}
