import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {CategoryInputsComponent} from "../_form/category-inputs.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CategoryInputsComponent],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit, OnDestroy {
  categoryItem!: Category

  constructor(
    private activatedRoute: ActivatedRoute,
    private twa: TwaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: CategoriesService
  ) {
  }

  protected categoryForm: FormGroup = this.formBuilder.group({})
  protected serviceSubscription?: Subscription

  ngOnInit() {
    this.twa.backButtonOnClick(() => this.router.navigate([routeCreator.chartCategory(this.categoryItem)]))
    this.twa.setMainButton(
      {text: 'Save', is_visible: true, is_active: true, has_shine_effect: true},
      () => this.submit(),
    )

    this.activatedRoute.data
      .subscribe((data: any) => this.categoryItem = data.categoryItem)
  }

  submit() {
    if (this.categoryForm.invalid) {
      return
    }

    const newCategory: Category = this.categoryForm.value
    this.serviceSubscription = this.service.edit(Object.assign(this.categoryItem, newCategory)).subscribe(
      (category: Category) => this.router.navigate([routeCreator.chartCategory(category)])
    )
  }

  ngOnDestroy(): void {
    this.twa.visibleMainButton(false)
    this.serviceSubscription?.unsubscribe()
  }
}
