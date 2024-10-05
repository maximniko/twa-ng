import {Category, CATEGORY_MAX_ID, categoryGenerator} from "../../categories/interfaces/category";
import {getRandomInt} from "../../../../../common/extensions/Number";

export interface Transaction {
  id: number,
  category: Category,
  tag: TransactionTag,
  total: number,
  date: Date,
}

export interface TransactionTag {
  id: number,
  title: string,
  frequency: number, // for sort
}

export const TRANSACTION_MAX_ID = 100
export const TRANSACTION_MAX_TAG_ID = 10

export function transactionGenerator(id: number): Transaction {
  return {
    id: id,
    category: categoryGenerator(id % CATEGORY_MAX_ID + 1),
    tag: transactionTagGenerator(id % TRANSACTION_MAX_TAG_ID + 1),
    total: getRandomInt(id * 10000),
    date: new Date(Date.now()),
  }
}

function transactionTagGenerator(id: number): TransactionTag {
  return {
    id: id,
    title: `Tag ${id}`,
    frequency: getRandomInt(id * 100),
  }
}
