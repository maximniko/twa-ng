import {Routes} from "@angular/router";

export const staticPages: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./static-pages.component').then(mod => mod.StaticPagesComponent),
    data: {breadcrumb: 'Home'},
    children: [
      {
        path: '',
        loadComponent: () => import('./main/main.component').then(mod => mod.MainComponent)
      },
    ],
  },
]
