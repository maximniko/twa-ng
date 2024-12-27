import {TransactionsService} from "./services/transactions.service";
import {TransactionsDevService} from "./services/transactions-dev.service";
import {environment} from "../../../../../environments/environment";
import {EnvironmentProviders, Provider} from "@angular/core";

export const transactionsProviders: Array<Provider | EnvironmentProviders> = [
  {provide: TransactionsService, useClass: environment.production ? TransactionsDevService : TransactionsDevService}
]
