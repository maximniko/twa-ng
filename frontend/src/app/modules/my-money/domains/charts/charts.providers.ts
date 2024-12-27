import {ChartCategoriesService} from "./services/chart-categories.service";
import {ChartCategoriesDevService} from "./services/chart-categories-dev.service";
import {environment} from "../../../../../environments/environment";
import {EnvironmentProviders, Provider} from "@angular/core";

export const chartsProviders: Array<Provider | EnvironmentProviders> = [
  {provide: ChartCategoriesService, useClass: environment.production ? ChartCategoriesDevService : ChartCategoriesDevService}
]
