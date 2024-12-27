import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {ReactiveForm} from "../../../../../common/components/reactive-form.component";
import {CategoryInputsComponent} from "../_form/category-inputs.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule, CategoryInputsComponent, ReactiveFormsModule],
  templateUrl: './add.component.html',
})
export class AddComponent extends ReactiveForm implements OnInit, OnDestroy {
  constructor(
    private twa: TwaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: CategoriesService
  ) {
    super();
  }

  protected categoryForm: FormGroup = this.formBuilder.group({})
  protected serviceSubscription?: Subscription

  ngOnInit() {
    this.twa.backButtonOnClick(() => this.router.navigate([routeCreator.categories()]))
    this.twa.setMainButton({text: 'Add', is_active: true, is_visible: true}, () => this.submit())
  }

  ngOnDestroy(): void {
    this.twa.visibleMainButton(false)
    this.serviceSubscription?.unsubscribe()
    // this.twa.setMainButtonOffClick(this.submit)
  }

  submit() {
    if (this.categoryForm.invalid) {
      return
    }

    const newCategory: Category = this.categoryForm.value
    this.serviceSubscription = this.service.create(newCategory).subscribe(
      (category: Category) => this.router.navigate([routeCreator.chartCategory(category)])
    )
  }
}
