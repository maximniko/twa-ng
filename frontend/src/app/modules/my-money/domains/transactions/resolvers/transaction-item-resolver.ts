import {ActivatedRouteSnapshot, ResolveFn, Router} from "@angular/router";
import {EMPTY, mergeMap, of} from "rxjs";
import {inject} from "@angular/core";
import {routeCreator} from "../../../my-money.routes";
import {TransactionsService} from "../services/transactions.service";
import {TransactionsFilter} from "../services/transactions-filter";
import {Transaction} from "../interfaces/transaction";

export const transactionItemResolver: ResolveFn<Transaction> = (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id')!;

  return inject(TransactionsService).item(new TransactionsFilter({id: Number(id)}))
    .pipe(mergeMap(transactionItem => {
      if (transactionItem) {
        return of(transactionItem);
      } else {
        const router = inject(Router);
        router.navigate([routeCreator.main()]);
        return EMPTY;
      }
    }))
};
