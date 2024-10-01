import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {ReactiveForm} from "../../../../../common/components/reactive-form.component";
import {CategoryFormComponent} from "../_form/category-form.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {CategoriesService} from "../../../domains/categories/services/categories.service";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink,  CategoryFormComponent],
  templateUrl: './add.component.html',
})
export class AddComponent extends ReactiveForm implements OnInit {
  constructor(
    private twa: TwaService,
    private router: Router,
    private service: CategoriesService
  ) {
    super();
  }

  ngOnInit() {
    this.twa.backButton(() => this.router.navigate([routeCreator.categories()]))
  }

  onSubmit(category: Category) {
    this.service.create(category).subscribe(
      () => this.router.navigate([routeCreator.categories()])
    )
  }

  protected readonly symbols = symbols;
}
