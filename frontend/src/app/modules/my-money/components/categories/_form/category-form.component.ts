import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveForm} from "../../../../../common/components/reactive-form.component";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Category, NewCategory} from "../../../domains/categories/interfaces/category";
import {Observable} from "rxjs";
import {InValidator} from "../../../../../common/extensions/Validators";

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
})
export class CategoryFormComponent extends ReactiveForm implements OnInit {

  @Output() category = new EventEmitter<Category>
  @Input() categoryItem?: Category | undefined

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  protected categoryForm: FormGroup = this.formBuilder.group({})

  ngOnInit() {
    this.categoryForm.addControl('title', this.formBuilder.control(this.categoryItem?.title ?? '', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(32),
    ]))
    this.categoryForm.addControl('icon', this.formBuilder.control(this.categoryItem?.icon ?? '', [
      Validators.required,
      InValidator(["build"])
    ]))
    this.categoryForm.addControl('description', this.formBuilder.control(this.categoryItem?.description ?? '', [
      Validators.minLength(3),
      Validators.maxLength(255),
    ]))
  }

  private get title() {
    return this.categoryForm.get('title');
  }

  private get icon() {
    return this.categoryForm.get('icon');
  }

  private get description() {
    return this.categoryForm.get('description');
  }

  get titleErrors() {
    return this.errors(this.title);
  }

  get isInvalidTitle(): boolean | undefined {
    return this.isInvalid(this.title)
  }

  get iconErrors() {
    return this.errors(this.icon);
  }

  get isInvalidIcon(): boolean | undefined {
    return this.isInvalid(this.icon)
  }

  get descriptionErrors() {
    return this.errors(this.description);
  }

  get isInvalidDescription(): boolean | undefined {
    return this.isInvalid(this.description)
  }

  submit() {
    this.submitNewExecutor()
      .subscribe((category: Category) => this.category.emit(category))
  }

  private submitNewExecutor(): Observable<Category> {
    const newCategory: NewCategory = this.categoryForm.value
    return this.categoriesService.create(newCategory)
  }
}
