import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {Category} from "../../../domains/categories/interfaces/category";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {CategoriesFilter} from "../../../domains/categories/services/categories-filter";
import {routeCreator} from "../../../my-money.routes";
import {TwaService} from "../../../../../common/services/twa.service";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
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
        this.categories = items
      }
    )
    this.twa.backButtonOnClick(() => this.router.navigate([routeCreator.main()]))
    this.twa.setMainButton(
      {text: "Add Category", is_active: true, is_visible: true, has_shine_effect: true},
      () => this.onMainClick()
    )
  }

  onMainClick() {
    this.router.navigate([routeCreator.categoriesAdd()])
  }

  ngOnDestroy(): void {
    this.twa.visibleMainButton(false)
  }

  protected readonly routeCreator = routeCreator;
}
