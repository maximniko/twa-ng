import {Component, Input, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveForm} from "../../../../../common/components/reactive-form.component";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {Transaction} from "../../../domains/transactions/interfaces/transaction";
import {InValidator} from "../../../../../common/extensions/Validators";
import {TagInputComponent} from "./components/tag-input.component";
import {DateInputComponent} from "./components/date-input.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {CategoriesFilter} from "../../../domains/categories/services/categories-filter";

@Component({
  selector: 'transaction-inputs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TagInputComponent, DateInputComponent],
  templateUrl: './transaction-inputs.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class TransactionInputsComponent extends ReactiveForm implements OnInit {
  @Input() transactionItem?: Transaction | undefined
  @Input() parentForm!: FormGroup

  categoriesList: Category[] = []

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
  ) {
    super();
  }

  ngOnInit() {
    this._initCategories()
    this.parentForm.addControl('total', this.formBuilder.control(this.transactionItem?.total ?? '', [
      Validators.min(1),
      Validators.max(1000000000),
    ]))
  }

  private _initCategories() {
    this.categoriesService.list(new CategoriesFilter({}))
      .subscribe(items => {
        this.categoriesList = items
        // const categoryIds = this.categoriesList.reduce<string[]>((acc, item: Category) => {
        //   acc.push(String(item.id!))
        //   return acc
        // }, []);

        this.parentForm.addControl('category', this.formBuilder.control(this.transactionItem?.category, [
          Validators.required,
          InValidator(this.categoriesList)
        ]))
      })
  }

  private get category() {
    return this.parentForm.get('category');
  }

  private get total() {
    return this.parentForm.get('total');
  }

  get categoryErrors() {
    return this.errors(this.category);
  }

  get totalErrors() {
    return this.errors(this.total);
  }

  get isInvalidCategory(): boolean | undefined {
    return this.isInvalid(this.category)
  }

  get isInvalidTotal(): boolean | undefined {
    return this.isInvalid(this.total)
  }
}
