import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Category} from "../interfaces/category";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {CategoriesService} from "../services/categories.service";
import {CategoriesFilter} from "../services/categories-filter";

export const categoryItemResolver: ResolveFn<Category | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Category | undefined> => {
  return inject(CategoriesService).item(new CategoriesFilter({id: Number(route.paramMap.get('categoryId')!)}))
};
