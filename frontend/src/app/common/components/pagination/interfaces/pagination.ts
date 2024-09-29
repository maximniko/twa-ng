export interface Pagination<T> {
  items: T[]
  currentPage: number
  perPage: number
  total: number
}

export function paginationGenerator<T>(currentPage: number, perPage: number, total: number, items: T[]): Pagination<T> {
  return {
    items: items,
    currentPage: currentPage,
    perPage: perPage,
    total: total
  }
}
