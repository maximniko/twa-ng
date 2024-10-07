import {Routes} from "@angular/router";
import {categoryItemResolver} from "./domains/categories/resolvers/category-item-resolver";
import {Category} from "./domains/categories/interfaces/category";
import {transactionItemResolver} from "./domains/transactions/resolvers/transaction-item-resolver";
import {Transaction} from "./domains/transactions/interfaces/transaction";
import {AddByCategoryComponent} from "./components/transactions/add/add-by-category.component";

const ROUTE_PARTS = {
  myMoney: 'my-money',
  main: 'main',
  categories: 'categories',
  chartCategory: 'chart-category',
  transactions: 'transactions',
  settings: 'settings',
}

export const routeCreator = {
  main: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.main}`,
  settings: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.settings}`,
  categories: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.categories}`,
  categoriesAdd: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.categories}/add`,
  chartCategory: (category: Category) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.chartCategory}/${category.id}`,
  transactions: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}`,
  transactionEdit: (transaction: Transaction) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}/${transaction.id}/edit`,
  transactionAdd: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}/add`,
  transactionAddByCategory: (category: Category) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}/add/by-category/${category.id}`,
}

export const myMoneyRoutes: Routes = [
  {
    path: `${ROUTE_PARTS.myMoney}`,
    loadComponent: () => import('./my-money.component').then(mod => mod.MyMoneyComponent),
    children: [
      {path: '', redirectTo: routeCreator.main(), pathMatch: 'full'},
      {
        path: `${ROUTE_PARTS.main}`,
        loadComponent: () => import('./components/charts/main/main.component').then(mod => mod.MainComponent)
      },
      {
        path: `${ROUTE_PARTS.settings}`,
        loadComponent: () => import('./components/settings/settings.component').then(mod => mod.SettingsComponent)
      },
      {
        path: `${ROUTE_PARTS.chartCategory}/:id`,
        loadComponent: () => import('./components/charts/chart-category/chart-category.component').then(mod => mod.ChartCategoryComponent),
        resolve: {categoryItem: categoryItemResolver},
      },
      {
        path: `${ROUTE_PARTS.transactions}/add`,
        loadComponent: () => import('./components/transactions/add/add.component').then(mod => mod.AddComponent),
      },
      {
        path: `${ROUTE_PARTS.transactions}/add/by-category/:id`,
        loadComponent: () => import('./components/transactions/add/add-by-category.component').then(mod => mod.AddByCategoryComponent),
        resolve: {categoryItem: categoryItemResolver},
      },
      {
        path: `${ROUTE_PARTS.transactions}/:id/edit`,
        loadComponent: () => import('./components/transactions/edit/edit.component').then(mod => mod.EditComponent),
        resolve: {transactionItem: transactionItemResolver},
      },
    ],
  },
  {path: '**', redirectTo: routeCreator.main(), pathMatch: 'full'},
];
