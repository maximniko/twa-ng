import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {CategoryFormComponent} from "../_form/category-form.component";
import {Category} from "../../../domains/categories/interfaces/category";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CategoryFormComponent],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  categoryItem?: Category | undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private twa: TwaService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.twa.backButton(() => this.router.navigate([routeCreator.categories()]))
    this.activatedRoute.data
      .subscribe((data: any) => this.categoryItem = data.categoryItem)
  }

  onCategory(category: Category) {
    this.router.navigateByUrl(routeCreator.categoryViewId(category))
  }

  protected readonly symbols = symbols;
}
