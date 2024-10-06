import {Category, CATEGORY_MAX_ID, categoryGenerator} from "../../categories/interfaces/category";
import {getRandomInt} from "../../../../../common/extensions/Number";
import {getColor} from "../../../../../common/interfaces/colors";

export interface ChartCategory {
  category: Category,
  color: string,
  total: number,
}

export function chartCategoryGenerator(id: number): ChartCategory {
  return {
    category: categoryGenerator(id % CATEGORY_MAX_ID + 1),
    color: getColor(id),
    total: getRandomInt(id * 100000),
  }
}
