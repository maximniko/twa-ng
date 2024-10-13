import {Component, Input, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveForm} from "../../../../../../common/components/reactive-form.component";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from "rxjs";
import {Transaction} from "../../../../domains/transactions/interfaces/transaction";

@Component({
  selector: 'transaction-tag-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbTypeahead],
  template: `
    <div class="form-floating mb-3">
      <input type="text" class="form-control" placeholder="{{localisation.t.Title ?? 'Title'}}" id="form-tag" formControlName="tag"
             [focusFirst]="true"
             [ngbTypeahead]="search"
             [ngClass]="{
            'is-invalid': isInvalidTag,
            'is-valid': parentForm.valid,
          }">
      <label for="form-tag">{{ localisation.t.Title ?? 'Title' }}</label>
      <div class="invalid-feedback" *ngIf="isInvalidTag">
        {{ validationErrors(tagErrors, localisation.t.Title ?? 'Title') }}
      </div>
    </div>`,
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class TagInputComponent extends ReactiveForm implements OnInit {
  @Input() transactionItem?: Transaction | undefined
  @Input() parentForm!: FormGroup
  tagTitles: string[] = []

  constructor(
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  ngOnInit() {

    this.parentForm.addControl(
      'tag',
      this.formBuilder.control(this.transactionItem?.tag.title ?? '', [
        Validators.minLength(3),
        Validators.maxLength(32),
      ])
    )
  }

  protected search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : this.tagTitles.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );

  private get tag() {
    return this.parentForm.get('tag');
  }

  get tagErrors() {
    return this.errors(this.tag);
  }

  get isInvalidTag(): boolean | undefined {
    return this.isInvalid(this.tag)
  }
}
