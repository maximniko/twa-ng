import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {ReactiveForm} from "../../../../../common/components/reactive-form.component";
import {TransactionInputsComponent} from "../_form/transaction-inputs.component";
import {FormBuilder, FormControlStatus, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TransactionsService} from "../../../domains/transactions/services/transactions.service";
import {FormTransaction, Transaction} from "../../../domains/transactions/interfaces/transaction";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {Category} from "../../../domains/categories/interfaces/category";

@Component({
  standalone: true,
  imports: [CommonModule, TransactionInputsComponent, ReactiveFormsModule],
  templateUrl: './add.component.html',
})
export class AddComponent extends ReactiveForm implements OnInit, OnDestroy {
  categoryItem?: Category
  constructor(
    protected twa: TwaService,
    protected router: Router,
    protected formBuilder: FormBuilder,
    protected service: TransactionsService
  ) {
    super();
    this.submit = this.submit.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  protected transactionForm: FormGroup = this.formBuilder.group({})

  ngOnInit() {
    this.transactionForm.statusChanges
      .subscribe((status: FormControlStatus) => this.twa.mainButtonIsActive(status == "VALID"))
    this.twa.backButtonOnClick(this.goBack)
    this.twa.setMainButton({text: 'Add', is_active: true, is_visible: true}, this.submit)
  }

  ngOnDestroy(): void {
    this.twa.offBackButton(this.goBack)
    this.twa.offMainButton(this.submit)
  }

  submit() {
    if (this.transactionForm.invalid) {
      return
    }

    const form: FormTransaction = this.transactionForm.value
    this.service.create(form).subscribe(
      (transaction: Transaction) => this.router.navigate([routeCreator.chartCategory(transaction.category)])
    )
  }

  goBack() {
    this.router.navigate([routeCreator.main()])
  }

  protected readonly symbols = symbols;
}
