import {Routes} from "@angular/router";
import {categoryItemResolver} from "./domains/categories/resolvers/category-item-resolver";
import {Category} from "./domains/categories/interfaces/category";

const ROUTE_PARTS = {
  myMoney: 'my-money',
  main: 'main',
  categories: 'categories',
  transactions: 'transactions',
  view: 'view',
}

export const routeCreator = {
  myMoney: () => `/${ROUTE_PARTS.myMoney}`,
  main: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.main}`,
  categories: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.categories}`,
  categoriesPage: (page: number) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.categories}?page=${page}`,
  categoryViewId: (category: Category) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.categories}/${category.id}`,
  transactions: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}`,
  transactionsPage: (page: number) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}?page=${page}`,
  transactionViewId: (id: number) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}/${ROUTE_PARTS.view}/${id}`,
}

export const myMoneyRoutes: Routes = [
  {
    path: `${ROUTE_PARTS.myMoney}`, loadComponent: () => import('./my-money.component').then(mod => mod.MyMoneyComponent),
    data: {breadcrumb: 'My Money'},
    children: [
      {path: '', redirectTo: routeCreator.main(), pathMatch: 'full'},
      {path: `${ROUTE_PARTS.main}`, loadComponent: () => import('./components/main/main.component').then(mod => mod.MainComponent)},
      {path: `${ROUTE_PARTS.categories}`, loadComponent: () => import('./components/categories/list/list.component').then(mod => mod.ListComponent)},
      {
        path: `${ROUTE_PARTS.categories}/${ROUTE_PARTS.view}/:categoryId`,
        loadComponent: () => import('./components/categories/detail/detail.component').then(mod => mod.DetailComponent),
        data: {breadcrumb: (data: any) => `${data.categoryItem.title}`},
        resolve: {categoryItem: categoryItemResolver}
      },
    ],
  },
  {path: '**', redirectTo: routeCreator.main(), pathMatch: 'full'},
];

// export const myMoneyRoutes: Routes = [
//   {
//     path: 'home',
//     loadComponent: () => import('./my-money.component').then(mod => mod.MyMoneyComponent),
//     data: {breadcrumb: 'Home'},
//     children: [
//       {
//         path: '',
//         loadComponent: () => import('./components/main/main.component').then(mod => mod.MainComponent)
//       },
//     ],
//   },
// ]
