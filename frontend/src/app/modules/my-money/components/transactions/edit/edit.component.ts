import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";
import {TransactionInputsComponent} from "../_form/transaction-inputs.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FormTransaction, Transaction} from "../../../domains/transactions/interfaces/transaction";
import {TransactionsService} from "../../../domains/transactions/services/transactions.service";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TransactionInputsComponent],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit, OnDestroy {
  transactionItem!: Transaction

  constructor(
    private activatedRoute: ActivatedRoute,
    private twa: TwaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: TransactionsService
  ) {
  }

  protected transactionForm: FormGroup = this.formBuilder.group({})

  ngOnInit() {
    this.twa.backButton(() => this.router.navigate([this._backUrl]))
    this.twa.setMainButton(
      {text: 'Save', is_visible: true, is_active: true, has_shine_effect: true},
      () => this.save(),
    )
    this.twa.setSecondaryButton(
      {text: 'Delete', is_visible: true, is_active: true, has_shine_effect: true, position: 'left'},
      () => this.delete(),
    )

    this.activatedRoute.data
      .subscribe((data: any) => this.transactionItem = data.categoryItem)
  }

  protected save() {
    if (this.transactionForm.invalid) {
      return
    }

    const form: FormTransaction = this.transactionForm.value
    this.service.edit(Object.assign(this.transactionItem, form))
      .subscribe(() => this.router.navigate([this._backUrl]))
  }

  private delete() {
    this.service.delete(this.transactionItem).subscribe(
      res => {
        if (res.status == HttpStatusCode.NoContent) {
          this.router.navigate([this._backUrl])
        } else {
          // todo handle error
        }
      }
    )
  }

  private get _backUrl(): string {
    return routeCreator.chartCategory(this.transactionItem.category)
  }

  ngOnDestroy(): void {
    this.twa.visibleMainButton(false)
    this.twa.visibleSecondaryButton(false)
  }
}
