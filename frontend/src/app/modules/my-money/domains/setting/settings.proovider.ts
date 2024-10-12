import {EnvironmentProviders, Provider} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {SettingsService} from "./services/settings.service";
import {SettingsDevService} from "./services/settings-dev.service";

export const settingsProviders: Array<Provider | EnvironmentProviders> = [
  {provide: SettingsService, useClass: environment.production ? SettingsDevService : SettingsDevService}
]
