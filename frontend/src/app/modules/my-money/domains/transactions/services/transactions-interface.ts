import {Observable} from "rxjs";
import {FormTransaction, Transaction} from "../interfaces/transaction";
import {TransactionsFilter} from "./transactions-filter";
import {HttpResponse} from "@angular/common/http";

export interface TransactionsInterface {
  list(filter: TransactionsFilter): Observable<Transaction[]>

  item(filter: TransactionsFilter): Observable<Transaction | undefined>

  create(transaction: FormTransaction): Observable<Transaction>

  edit(transaction: FormTransaction): Observable<Transaction>

  delete(transaction: Transaction): Observable<HttpResponse<object>>
}
