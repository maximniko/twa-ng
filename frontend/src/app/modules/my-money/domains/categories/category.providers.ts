import {CategoriesService} from "./services/categories.service";
import {environment} from "../../../../../environments/environment";
import {CategoriesDevService} from "./services/categories-dev.service";
import {EnvironmentProviders, Provider} from "@angular/core";

export const categoryProviders: Array<Provider | EnvironmentProviders> = [
  {provide: CategoriesService, useClass: environment.production ? CategoriesDevService : CategoriesDevService}
]
