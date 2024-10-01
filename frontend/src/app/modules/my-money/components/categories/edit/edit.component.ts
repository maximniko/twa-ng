import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {CategoryInputsComponent} from "../_form/category-inputs.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CategoryInputsComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
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

  ngOnInit() {
    this.twa.backButton(() => this.router.navigate([routeCreator.categories()]))
    this.twa.setMainButton({text: 'Edit'}, this.submit)

    this.activatedRoute.data
      .subscribe((data: any) => this.categoryItem = data.categoryItem)
  }

  submit() {
    if (this.categoryForm.invalid) {
      return
    }

    const newCategory: Category = this.categoryForm.value
    this.service.edit(newCategory).subscribe(
        (category: Category) => this.router.navigate([routeCreator.categoryViewId(category)])
    )
  }

  protected readonly symbols = symbols;
}
