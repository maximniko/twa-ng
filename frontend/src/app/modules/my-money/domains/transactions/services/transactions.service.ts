import {Injectable} from '@angular/core';
import {FormTransaction, Transaction} from "../interfaces/transaction";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TransactionsInterface} from "./transactions-interface";
import {TransactionsFilter} from "./transactions-filter";

@Injectable({providedIn: 'root'})
export class TransactionsService implements TransactionsInterface {
  constructor(private readonly httpClient: HttpClient) {
  }

  create(transaction: FormTransaction) {
    return this.httpClient.post<Transaction>('/backend/transactions/create', transaction)
  }

  edit(transaction: FormTransaction) {
    return this.httpClient.patch<Transaction>('/backend/transactions/edit', transaction)
  }

  delete(transaction: Transaction) {
    return this.httpClient.delete(`/backend/transactions/delete/${transaction.id}`, {observe: 'response'})
  }

  list(filter: TransactionsFilter): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>('/backend/transactions', {
      params: filter.toHttpParams(),
    })
  }

  item(filter: TransactionsFilter): Observable<Transaction> {
    return this.httpClient.get<Transaction>(`/backend/transactions/get`, {
      params: filter.toHttpParams(),
    })
  }
}
