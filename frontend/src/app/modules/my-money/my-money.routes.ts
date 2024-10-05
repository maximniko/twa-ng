import {Routes} from "@angular/router";
import {categoryItemResolver} from "./domains/categories/resolvers/category-item-resolver";
import {Category} from "./domains/categories/interfaces/category";

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
  categoryViewId: (category: Category) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.categories}/${category.id}`,
  chartCategory: (category: Category) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.chartCategory}/${category.id}`,
  categoriesEdit: (category: Category) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.categories}/${category.id}/edit`,
  transactions: () => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}`,
  transactionViewId: (id: number) => `/${ROUTE_PARTS.myMoney}/${ROUTE_PARTS.transactions}/${id}`,
}

export const myMoneyRoutes: Routes = [
  {
    path: `${ROUTE_PARTS.myMoney}`,
    loadComponent: () => import('./my-money.component').then(mod => mod.MyMoneyComponent),
    data: {title: 'My Money'},
    children: [
      {path: '', redirectTo: routeCreator.main(), pathMatch: 'full'},
      {
        path: `${ROUTE_PARTS.main}`,
        data: {title: "Main"},
        loadComponent: () => import('./components/main/main.component').then(mod => mod.MainComponent)
      },
      {
        path: `${ROUTE_PARTS.settings}`,
        data: {title: "Settings"},
        loadComponent: () => import('./components/settings/settings.component').then(mod => mod.SettingsComponent)
      },
      {
        path: `${ROUTE_PARTS.categories}`,
        data: {title: "Categories"},
        loadComponent: () => import('./components/categories/list/list.component').then(mod => mod.ListComponent),
      },
      {
        path: `${ROUTE_PARTS.categories}/add`,
        data: {title: "Add Category"},
        loadComponent: () => import('./components/categories/add/add.component').then(mod => mod.AddComponent)
      },
      {
        path: `${ROUTE_PARTS.categories}/:id`,
        loadComponent: () => import('./components/categories/detail/detail.component').then(mod => mod.DetailComponent),
        data: {title: (data: any) => `${data.categoryItem.title}`},
        resolve: {categoryItem: categoryItemResolver},
      },
      {
        path: `${ROUTE_PARTS.chartCategory}/:id`,
        loadComponent: () => import('./components/categories/detail/detail.component').then(mod => mod.DetailComponent),
        data: {title: (data: any) => `${data.categoryItem.title}`},
        resolve: {categoryItem: categoryItemResolver},
      },
      {
        path: `${ROUTE_PARTS.categories}/:id/edit`,
        loadComponent: () => import('./components/categories/edit/edit.component').then(mod => mod.EditComponent),
        data: {title: (data: any) => `${data.categoryItem.title}`},
        resolve: {categoryItem: categoryItemResolver},
      },
    ],
  },
  {path: '**', redirectTo: routeCreator.main(), pathMatch: 'full'},
];

// export const myMoneyRoutes: Routes = [
//   {
//     path: 'home',
//     loadComponent: () => import('./my-money.component').then(mod => mod.MyMoneyComponent),
//     data: {title: 'Home'},
//     children: [
//       {
//         path: '',
//         loadComponent: () => import('./components/main/main.component').then(mod => mod.MainComponent)
//       },
//     ],
//   },
// ]
