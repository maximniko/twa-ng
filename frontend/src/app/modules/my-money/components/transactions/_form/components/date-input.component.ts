import {Component, Input, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveForm} from "../../../../../../common/components/reactive-form.component";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule, Validators,
} from "@angular/forms";
import {
  NgbCalendar, NgbDate,
  NgbInputDatepicker,
  NgbInputDatepickerConfig
} from "@ng-bootstrap/ng-bootstrap";
import {Transaction} from "../../../../domains/transactions/interfaces/transaction";
import {DateValidator} from "../../../../../../common/extensions/Validators";

@Component({
  selector: 'transaction-date-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbInputDatepicker],
  template: `
    <div class="form-floating mb-3">
      <input
        id="form-date"
        class="form-control"
        placeholder="yyyy-mm-dd"
        formControlName="date"
        ngbDatepicker
        (click)="d.toggle()"
        (focus)="d.toggle()"
        #d="ngbDatepicker"
        [ngClass]="{
            'is-invalid': isInvalidDate,
            'is-valid': parentForm.valid,
          }"
      />
      <label for="form-date">Date</label>
      <div class="invalid-feedback" *ngIf="isInvalidDate">
        {{ validationErrors(dateErrors, 'Date') }}
      </div>
    </div>`,
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class DateInputComponent extends ReactiveForm implements OnInit {
  @Input() transactionItem?: Transaction
  @Input() parentForm!: FormGroup
  today: NgbDate = this.calendar.getToday();

  constructor(
    private formBuilder: FormBuilder,
    protected config: NgbInputDatepickerConfig,
    protected calendar: NgbCalendar,
  ) {
    super();
    config.maxDate = this.today;
    config.startDate = this.today;
    config.navigation = 'select';
    config.placement = 'top';
  }

  ngOnInit() {
    this.parentForm.addControl('date', this.formBuilder.control(this.today, [
      Validators.required,
      DateValidator(this.today),
    ]))
  }

  private get date() {
    return this.parentForm.get('date');
  }

  get dateErrors() {
    return this.errors(this.date);
  }

  get isInvalidDate(): boolean | undefined {
    return this.isInvalid(this.date)
  }
}
