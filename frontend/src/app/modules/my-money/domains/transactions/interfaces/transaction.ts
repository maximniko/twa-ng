import {Category, CATEGORY_MAX_ID, categoryGenerator} from "../../categories/interfaces/category";
import {getRandomInt} from "../../../../../common/extensions/Number";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";

export interface Transaction {
  id: number,
  category: Category,
  tag: TransactionTag,
  total: number,
  date: Date,
}

export interface FormTransaction {
  id: number,
  category: Category,
  tag: string,
  total: number,
  date: NgbDate,
}

export interface TransactionTag {
  id: number,
  title: string,
  frequency?: number,
}

export const TRANSACTION_MAX_ID = 100
export const TRANSACTION_MAX_TAG_ID = 10

export const dummyTags: TransactionTag[] = [...Array(TRANSACTION_MAX_TAG_ID).keys()].map((i) => transactionTagGenerator(i + 1))
export const dummyTransactions: Transaction[] = [...Array(TRANSACTION_MAX_ID).keys()].map((i) => transactionGenerator(i + 1))

export function transactionGenerator(id: number): Transaction {
  return {
    id: id,
    category: categoryGenerator(id % CATEGORY_MAX_ID + 1),
    tag: dummyTags[getRandomInt(TRANSACTION_MAX_TAG_ID - 1)],
    total: getRandomInt(id * 100),
    date: new Date(Date.now()),
  }
}

function transactionTagGenerator(id: number): TransactionTag {
  return {
    id: id,
    title: `Tag ${id}`,
  }
}

export function nextTag(title: string): TransactionTag {
  const tag = {
    id: Math.max(...dummyTags.map((item: TransactionTag) => item.id!)) + 1,
    title: title,
  }
  dummyTags.push(tag)

  return tag
}

export function existingTag(title: string): TransactionTag | undefined {
  return dummyTags.find((tag: TransactionTag) => tag.title == title)
}

export function transactionFromForm(form: FormTransaction): Transaction {
  const tag = existingTag(form.tag) ?? nextTag(form.tag)
  const transitionItem: Transaction = {
    id: form.id ?? Math.max(...dummyTransactions.map((item: Transaction) => item.id!)) + 1,
    category: form.category,
    tag: tag,
    total: form.total,
    date: new Date(`${form.date.year}-${form.date.month}-${form.date.day}`),
  }
  dummyTransactions.push(transitionItem)
  return transitionItem
}
