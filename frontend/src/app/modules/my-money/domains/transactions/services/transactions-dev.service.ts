import {Injectable} from '@angular/core';
import {Transaction, TRANSACTION_MAX_ID, transactionGenerator} from "../interfaces/transaction";
import {Observable, of} from "rxjs";
import {TransactionsInterface} from "./transactions-interface";
import {TransactionsFilter} from "./transactions-filter";

@Injectable({providedIn: 'root'})
export class TransactionsDevService implements TransactionsInterface {

  private dummy: Transaction[] = [...Array(TRANSACTION_MAX_ID).keys()].map((i) => transactionGenerator(i + 1))

  item(filter: TransactionsFilter): Observable<Transaction | undefined> {
    return of(this.dummy.find((transaction: Transaction) => filter.filter(transaction))!)
  }

  list(filter: TransactionsFilter): Observable<Transaction[]> {
    return of(this.dummy.filter((item: Transaction) => filter.filter(item)))
  }

  create(transition: Transaction): Observable<Transaction> {
    if (!transition.id) {
      transition.id = Math.max(...this.dummy.map((item: Transaction) => item.id!)) + 1
    }
    this.dummy.push(transition)
    return of(transition);
  }

  edit(transition: Transaction): Observable<Transaction> {
    const index = this.dummy.findIndex((item: Transaction) => item.id == transition.id)
    if (index != -1) {
      this.dummy[index] = transition
    }
    return of(transition);
  }
}
