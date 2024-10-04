import {Observable} from "rxjs";
import {Transaction} from "../interfaces/transaction";
import {TransactionsFilter} from "./transactions-filter";

export interface TransactionsInterface {
  list(filter: TransactionsFilter): Observable<Transaction[]>

  item(filter: TransactionsFilter): Observable<Transaction|undefined>

  create(category: Transaction): Observable<Transaction>

  edit(category: Transaction): Observable<Transaction>
}
