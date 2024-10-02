import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {ReactiveForm} from "../../../../../common/components/reactive-form.component";
import {CategoryInputsComponent} from "../_form/category-inputs.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

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

  ngOnInit() {
    this.twa.backButton(() => this.router.navigate([routeCreator.categories()]))
    this.twa.setMainButton({text: 'Add', is_active: true, is_visible: true}, this.submit)
  }

  ngOnDestroy(): void {
    this.twa.visibleMainButton(false)
  }

  submit() {
    if (this.categoryForm.invalid) {
      return
    }

    const newCategory: Category = this.categoryForm.value
    this.service.create(newCategory).subscribe(
      (category: Category) => this.router.navigate([routeCreator.categoryViewId(category)])
    )
  }

  protected readonly symbols = symbols;
}
