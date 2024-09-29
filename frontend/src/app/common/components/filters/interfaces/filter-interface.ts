import {HttpParams} from "@angular/common/http";

export type HttpParamsOptionsFromObject = {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
}

export interface FilterInterface {
  items: FilterParam[]

  toHttpParams(): HttpParams

  filter(item: any): boolean
}

export interface FilterParam {
  id: number
  name: string
  title: string
  values: FilterValue[]
}

export interface FilterValue {
  id: number
  name: string
  title: string
}

export function filterGenerator<Type>(
  id: number,
  name: string,
  title: string,
  itemPusher: (item: Type) => FilterValue[], // for dev
  items: Type[],
): FilterParam {
  return {
    id: id,
    name: name,
    title: title,
    values: items.reduce((previousValue: FilterValue[], currentValue: Type) => {
        for (let filterValue of itemPusher(currentValue)) {
          if (!previousValue.some(
            (prevItem: FilterValue): boolean => filterValue.id == prevItem.id
          )) {
            previousValue.push(filterValue)
          }
        }
        return previousValue
      },
      [] as FilterValue[],
    ) as FilterValue[],
  }
}
