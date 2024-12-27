import {APP_INITIALIZER, EnvironmentProviders, Provider} from "@angular/core";
import {categoryProviders} from "./domains/categories/category.providers";
import {transactionsProviders} from "./domains/transactions/transactions.providers";
import {chartsProviders} from "./domains/charts/charts.providers";
import {Localisation} from "../../common/services/localisation";
import {settingsProviders} from "./domains/setting/settings.proovider";

export const myMoneyProviders: Array<Provider | EnvironmentProviders> = [
  ...categoryProviders,
  ...transactionsProviders,
  ...chartsProviders,
  ...settingsProviders,
  {
    provide: APP_INITIALIZER,
    useFactory: initializeTranslations,
    multi: true,
    deps: [Localisation],
  },
]

export function initializeTranslations(localisation: Localisation) {
  return (): Promise<any> => localisation.load();
}
