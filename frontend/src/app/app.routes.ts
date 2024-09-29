import {Routes} from '@angular/router';
// import {staticPages} from "./modules/static-pages/static-pages.routes";
import {myMoneyRoutes} from "./modules/my-money/my-money.routes";

export const routes: Routes = [
  ...myMoneyRoutes,
  // ...staticPages,
]
