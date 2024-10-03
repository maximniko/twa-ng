import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {Category} from "../../../domains/categories/interfaces/category";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";

@Component({
  selector: 'my-money-category-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit, OnDestroy {
  categoryItem!: Category

  constructor(
    private activatedRoute: ActivatedRoute,
    private twa: TwaService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: any) => this.categoryItem = data['categoryItem'])
    this.twa.backButton(() => this.router.navigate([routeCreator.categories()]))
    this.twa.setMainButton(
      {text: 'Edit', is_visible: true, is_active: true},
      () => this.router.navigate([routeCreator.categoriesEdit(this.categoryItem)]),
    )
    this.twa.setSecondaryButton(
      {text: 'Edit', is_visible: true, is_active: true, position: 'right', color: "00F"},
      () => this.router.navigate([routeCreator.categoriesEdit(this.categoryItem)]),
    )
  }

  ngOnDestroy() {
    this.twa.visibleSecondaryButton(false)
    this.twa.visibleMainButton(false)
  }

  protected readonly symbols = symbols;
  protected readonly routeCreator = routeCreator;
}
