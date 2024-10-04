import {Injectable} from '@angular/core';
import {Transaction} from "../interfaces/transaction";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TransactionsInterface} from "./transactions-interface";
import {TransactionsFilter} from "./transactions-filter";

@Injectable({providedIn: 'root'})
export class TransactionsService implements TransactionsInterface {
  constructor(private readonly httpClient: HttpClient) {
  }

  create(transaction: Transaction) {
    return this.httpClient.post<Transaction>('/backend/transactions/create', transaction)
  }

  edit(transaction: Transaction) {
    return this.httpClient.patch<Transaction>('/backend/transactions/edit', transaction)
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
