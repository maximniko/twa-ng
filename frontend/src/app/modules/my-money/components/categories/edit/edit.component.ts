import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {CategoryFormComponent} from "../_form/category-form.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {CategoriesService} from "../../../domains/categories/services/categories.service";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CategoryFormComponent],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  categoryItem!: Category

  constructor(
    private activatedRoute: ActivatedRoute,
    private twa: TwaService,
    private router: Router,
    private service: CategoriesService
  ) {
  }

  ngOnInit() {
    this.twa.backButton(() => this.router.navigate([routeCreator.categories()]))
    this.activatedRoute.data
      .subscribe((data: any) => this.categoryItem = data.categoryItem)
  }

  onSubmit(category: Category) {
    this.service.edit(category).subscribe(
      (category) => this.router.navigateByUrl(routeCreator.categoryViewId(category))
    )
  }

  protected readonly symbols = symbols;
}
