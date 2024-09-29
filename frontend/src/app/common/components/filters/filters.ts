import {HttpParams} from "@angular/common/http";
import {FilterParam, FilterValue, HttpParamsOptionsFromObject} from "./interfaces/filter-interface";

export class Filters {

  private _selected: FilterParam[] = []

  get selected(): FilterParam[] {
    return this._selected
  }

  select(newParam: FilterParam, newValue: FilterValue) {
    const param = this._selected.find((selectedParam: FilterParam) => newParam.id == selectedParam.id)

    if (!param) {
      newParam.values = [newValue]
      this._selected.push(newParam)
      return
    }

    const valueIndex: number = param.values
      .reduce<number[]>((acc, item) => {
          acc.push(item.id)
          return acc
        }, [],
      )
      .indexOf(newValue.id)

    if (valueIndex > -1) {
      param.values.splice(valueIndex, 1);
      if (!param.values.length) {
        const paramIndex: number = this._selected
          .reduce<number[]>((acc, item) => {
              acc.push(item.id)
              return acc
            }, []
          )
          .indexOf(param.id)
        this._selected.splice(paramIndex, 1)
      }

    } else {
      param.values.push(newValue)
    }
  }

  toHttpParams(): HttpParams {
    const fromObject: HttpParamsOptionsFromObject = {}

    this.selected.forEach(function (item: FilterParam) {
      fromObject[item.name] = item.values.map((value: FilterValue) => value.name) as ReadonlyArray<string>
    })

    return new HttpParams({fromObject: fromObject})
  }
}
