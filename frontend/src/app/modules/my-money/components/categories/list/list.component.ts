import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {Category} from "../../../domains/categories/interfaces/category";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {CategoriesFilter} from "../../../domains/categories/services/categories-filter";
import {routeCreator} from "../../../my-money.routes";
import {TwaService} from "../../../../../common/services/twa.service";
import * as console from "node:console";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit, OnDestroy {
  categories: Category[] = []

  constructor(
    private service: CategoriesService,
    private twa: TwaService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.list(new CategoriesFilter({})).subscribe(
      items => {
        console.log(items)
        this.categories = items
      }
    )
    this.twa.backButton(() => this.router.navigate([routeCreator.main()]))
    this.twa.setMainButton(
      {text: "Add Category", is_active: true, is_visible: true, has_shine_effect: true},
      () => this.router.navigate([routeCreator.categoriesAdd()])
    )
  }

  protected readonly symbols = symbols;
  protected readonly routeCreator = routeCreator;

  ngOnDestroy(): void {
    this.twa.toggleMainButton()
  }
}
