import {HttpParams} from "@angular/common/http";
import {HttpParamsOptionsFromObject} from "../../../../../common/components/filters/interfaces/filter-interface";
import {ChartCategory} from "../interfaces/chart-category";
import {toParamDate} from "../../../../../common/extensions/Date";

export class ChartCategoriesFilter {
  constructor(private params: {
    categoryId?: number,
    from?: Date,
    to?: Date,
  }) {
  }

  toHttpParams(): HttpParams {
    const fromObject: HttpParamsOptionsFromObject = {}

    if (this.params.categoryId) {
      fromObject['categoryId'] = this.params.categoryId
    }
    if (this.params.from) {
      fromObject['from'] = toParamDate(this.params.from)
    }
    if (this.params.to) {
      fromObject['to'] = toParamDate(this.params.to)
    }

    return new HttpParams({fromObject: fromObject})
  }

  filter(item: ChartCategory): boolean {
    if (this.params.categoryId) {
      return item.category.id == this.params.categoryId
    }

    return this.params.categoryId == undefined
  }
}
