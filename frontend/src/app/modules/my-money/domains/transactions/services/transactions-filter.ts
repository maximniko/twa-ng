import {HttpParams} from "@angular/common/http";
import {HttpParamsOptionsFromObject} from "../../../../../common/components/filters/interfaces/filter-interface";
import {Transaction} from "../interfaces/transaction";
import {ifEmpty} from "../../../../../common/extensions/Object";

export class TransactionsFilter {
  constructor(private params: {
    id?: number,
    tagId?: number,
    categoryId?: number,
    from?: Date,
    to?: Date,
  }) {
  }

  toHttpParams(): HttpParams {
    const fromObject: HttpParamsOptionsFromObject = {}

    if (this.params.id) {
      fromObject['id'] = this.params.id
    }
    if (this.params.tagId) {
      fromObject['tagId'] = this.params.tagId
    }
    if (this.params.categoryId) {
      fromObject['categoryId'] = this.params.categoryId
    }
    if (this.params.from) {
      fromObject['from'] = this.params.from.toISOString()
    }

    return new HttpParams({fromObject: fromObject})
  }

  filter(item: Transaction): boolean {
    if (this.params.id) {
      return item.id == this.params.id
    }
    if (this.params.tagId) {
      return item.tag.id == this.params.tagId
    }
    if (this.params.categoryId) {
      return item.category.id == this.params.categoryId
    }
    if (this.params.categoryId) {
      return item.category.id == this.params.categoryId
    }

    return ifEmpty(this.params)
  }
}
