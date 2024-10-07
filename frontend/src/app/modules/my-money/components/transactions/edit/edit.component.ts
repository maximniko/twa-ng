import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {TransactionInputsComponent} from "../_form/transaction-inputs.component";
import {FormBuilder, FormControlStatus, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FormTransaction, Transaction} from "../../../domains/transactions/interfaces/transaction";
import {TransactionsService} from "../../../domains/transactions/services/transactions.service";
import {HttpStatusCode} from "@angular/common/http";
import {SelectorComponent} from "../../_layout/period/selector.component";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {Subscription} from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TransactionInputsComponent, SelectorComponent],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit, OnDestroy {
  transactionItem!: Transaction

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected twa: TwaService,
    protected router: Router,
    protected formBuilder: FormBuilder,
    protected service: TransactionsService
  ) {
  }

  protected transactionFormSubscription?: Subscription
  protected serviceSubscription?: Subscription
  protected serviceDeleteSubscription?: Subscription
  protected transactionForm: FormGroup = this.formBuilder.group({})

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {this.transactionItem = data.transactionItem})
    this.transactionFormSubscription = this.transactionForm.statusChanges
      .subscribe((status: FormControlStatus) => this.twa.mainButtonIsActive(status == "VALID"))

    this.twa.backButtonOnClick(() => this.goBack())
    this.twa.setSecondaryButton(
      {text: 'Delete', is_visible: true, is_active: true, has_shine_effect: false, position: 'left'},
      () => this.delete(),
    )
    this.twa.setMainButton(
      {text: 'Edit', is_visible: true, is_active: true, has_shine_effect: true},
      () => this.edit(),
    )
  }

  ngOnDestroy(): void {
    this.transactionFormSubscription?.unsubscribe()
    this.serviceSubscription?.unsubscribe()
    this.serviceDeleteSubscription?.unsubscribe()
    this.twa.mainButtonIsActive(true)
    this.twa.offMainButton(() => this.edit())
    this.twa.offBackButton(() => this.goBack())
    this.twa.offSecondaryButton(() => this.delete(), false)
  }

  protected edit() {
    if (this.transactionForm.invalid) {
      return
    }

    const form: FormTransaction = this.transactionForm.value
    form.id = this.transactionItem.id
    this.serviceSubscription = this.service.edit(form)
      .subscribe(() => this.router.navigateByUrl(this._backUrl))
  }

  private delete() {
    this.serviceDeleteSubscription = this.service.delete(this.transactionItem).subscribe(
      res => {
        if (res.status == HttpStatusCode.NoContent) {
          this.goBack()
        } else {
          // todo handle error
        }
      }
    )
  }

  goBack(): void {
    this.router.navigate([this._backUrl])
  }

  protected get _backUrl(): string {
    return routeCreator.chartCategory(this.transactionItem.category)
  }

  protected readonly symbols = symbols;
}
