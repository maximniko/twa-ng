import { ApplicationConfig } from '@angular/core';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideClientHydration} from "@angular/platform-browser";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {appRoutesProvider} from "./app.routes.provider";
// import {staticPagesProviders} from "./modules/static-pages/static-pages.providers";
import {myMoneyProviders} from "./modules/my-money/my-money.proveders";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    appRoutesProvider,
    provideClientHydration(),
    provideHttpClient(withFetch()),
    // ...staticPagesProviders,
    ...myMoneyProviders,
  ],
};
