import {Injectable} from '@angular/core';
import {
  FormTransaction,
  Transaction,
  TRANSACTION_MAX_ID, transactionFromForm,
  transactionGenerator
} from "../interfaces/transaction";
import {Observable, of} from "rxjs";
import {TransactionsInterface} from "./transactions-interface";
import {TransactionsFilter} from "./transactions-filter";
import {HttpResponse, HttpStatusCode} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class TransactionsDevService implements TransactionsInterface {

  private dummy: Transaction[] = [...Array(TRANSACTION_MAX_ID).keys()].map((i) => transactionGenerator(i + 1))

  item(filter: TransactionsFilter): Observable<Transaction | undefined> {
    return of(this.dummy.find((transaction: Transaction) => filter.filter(transaction))!)
  }

  list(filter: TransactionsFilter): Observable<Transaction[]> {
    return of(
      this.dummy.filter((item: Transaction) => filter.filter(item))
        .sort(
          (a: Transaction, b: Transaction) => a.date > b.date ? -1 : 1
        )
    )
  }

  create(form: FormTransaction): Observable<Transaction> {
    const transaction = transactionFromForm(form)
    this.dummy.push(transaction)
    return of(transaction);
  }

  edit(form: FormTransaction): Observable<Transaction> {
    const index = this.dummy.findIndex((item: Transaction) => item.id == form.id)
    const transaction = transactionFromForm(form)
    if (index != -1) {
      this.dummy[index] = transaction
    }
    return of(transaction);
  }

  delete(transaction: Transaction): Observable<HttpResponse<object>> {
    const index = this.dummy.findIndex((item: Transaction) => item.id == transaction.id)
    if (index > -1) {
      this.dummy.splice(index, 1);
      return of(new HttpResponse<object>({status: HttpStatusCode.NoContent}));
    }
    return of(new HttpResponse<object>({status: HttpStatusCode.BadRequest}));
  }
}
