import {EnvironmentProviders, Provider} from "@angular/core";
import {categoryProviders} from "./domains/categories/category.providers";
import {transactionsProviders} from "./domains/transactions/transactions.providers";
import {chartsProviders} from "./domains/charts/charts.providers";

export const myMoneyProviders: Array<Provider | EnvironmentProviders> = [
  ...categoryProviders,
  ...transactionsProviders,
  ...chartsProviders,
]
