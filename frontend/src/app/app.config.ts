import {ApplicationConfig} from '@angular/core';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideClientHydration} from "@angular/platform-browser";
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {appRoutesProvider} from "./app.routes.provider";
import {myMoneyProviders} from "./modules/my-money/my-money.proveders";
import {interceptors} from "./common/interceptors.provider";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    appRoutesProvider,
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    ...interceptors,
    // ...staticPagesProviders,
    ...myMoneyProviders,
  ],
};
