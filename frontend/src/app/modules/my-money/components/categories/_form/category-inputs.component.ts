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
import {Category} from "../../../domains/categories/interfaces/category";

@Component({
  selector: 'category-inputs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-inputs.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class CategoryInputsComponent extends ReactiveForm implements OnInit {
  @Input() categoryItem?: Category | undefined
  @Input() parentForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.parentForm.addControl('title', this.formBuilder.control(this.categoryItem?.title ?? '', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(32),
    ]))
    this.parentForm.addControl('description', this.formBuilder.control(this.categoryItem?.description.slice(0, 255) ?? '', [
      Validators.minLength(3),
      Validators.maxLength(255),
    ]))
  }

  private get title() {
    return this.parentForm.get('title');
  }

  private get description() {
    return this.parentForm.get('description');
  }

  get titleErrors() {
    return this.errors(this.title);
  }

  get isInvalidTitle(): boolean | undefined {
    return this.isInvalid(this.title)
  }

  get descriptionErrors() {
    return this.errors(this.description);
  }

  get isInvalidDescription(): boolean | undefined {
    return this.isInvalid(this.description)
  }
}
