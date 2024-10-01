import {ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot} from "@angular/router";
import {Category} from "../interfaces/category";
import {EMPTY, mergeMap, of} from "rxjs";
import {inject} from "@angular/core";
import {CategoriesService} from "../services/categories.service";
import {CategoriesFilter} from "../services/categories-filter";
import {routeCreator} from "../../../my-money.routes";

export const categoryItemResolver: ResolveFn<Category> = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const id = route.paramMap.get('id')!;

  return inject(CategoriesService).item(new CategoriesFilter({id: Number(id)}))
    .pipe(mergeMap(categoryItem => {
      if (categoryItem) {
        return of(categoryItem);
      } else {
        router.navigate([routeCreator.categories()]);
        return EMPTY;
      }
    }))
};
