import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveForm} from "../../../../../common/components/reactive-form.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Category} from "../../../domains/categories/interfaces/category";
import {InValidator} from "../../../../../common/extensions/Validators";

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
})
export class CategoryFormComponent extends ReactiveForm implements OnInit {

  @Output() onSubmit = new EventEmitter<Category>
  @Input() categoryItem?: Category | undefined

  constructor(private formBuilder: FormBuilder) {
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
      InValidator(["building"])
    ]))
    this.categoryForm.addControl('description', this.formBuilder.control(this.categoryItem?.description.slice(0, 255) ?? '', [
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
    this.onSubmit.emit(Object.assign(this.categoryItem ?? {}, this.categoryForm.value))
  }
}
