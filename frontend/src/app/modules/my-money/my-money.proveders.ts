import {EnvironmentProviders, Provider} from "@angular/core";
import {categoryProviders} from "./domains/categories/category.providers";

export const myMoneyProviders: Array<Provider | EnvironmentProviders> = [
  ...categoryProviders,
]
