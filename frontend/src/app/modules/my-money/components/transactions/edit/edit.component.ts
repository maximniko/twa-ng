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

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TransactionInputsComponent, SelectorComponent],
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
    this.activatedRoute.data
      .subscribe((data: any) => {
        this.transactionItem = data.transactionItem
        this.twa.backButton(() => this.router.navigateByUrl(this._backUrl))
      })
    this.twa.setSecondaryButton(
      {text: 'Delete', is_visible: true, is_active: true, has_shine_effect: false, position: 'left'},
      () => this.delete(),
    )
    this.twa.setMainButton(
      {text: 'Save', is_visible: true, is_active: true, has_shine_effect: true},
      () => this.save(),
    )
    this.transactionForm.statusChanges
      .subscribe((status: FormControlStatus) => this.twa.mainButtonIsActive(status == "VALID"))
  }

  ngOnDestroy(): void {
    this.twa.visibleBackButton(false)
    this.twa.visibleSecondaryButton(false)
    this.twa.visibleMainButton(false)
  }

  protected save() {
    if (this.transactionForm.invalid) {
      return
    }

    const form: FormTransaction = this.transactionForm.value
    form.id = this.transactionItem.id
    this.service.edit(form)
      .subscribe(() => this.router.navigateByUrl(this._backUrl))
  }

  private delete() {
    this.service.delete(this.transactionItem).subscribe(
      res => {
        if (res.status == HttpStatusCode.NoContent) {
          this.router.navigateByUrl(this._backUrl)
        } else {
          // todo handle error
        }
      }
    )
  }

  protected get _backUrl(): string {
    return routeCreator.chartCategory(this.transactionItem.category)
  }

  protected readonly symbols = symbols;
}
