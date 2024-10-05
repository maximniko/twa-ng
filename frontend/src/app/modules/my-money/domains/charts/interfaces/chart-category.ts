import {Category, CATEGORY_MAX_ID, categoryGenerator} from "../../categories/interfaces/category";
import {getRandomInt} from "../../../../../common/extensions/Number";

export interface ChartCategory {
  category: Category,
  lastDate: Date,
  total: number
}

export function chartCategoryGenerator(id: number): ChartCategory {
  return {
    category: categoryGenerator(id % CATEGORY_MAX_ID + 1),
    lastDate: new Date(Date.now()),
    total: getRandomInt(id * 100000),
  }
}
