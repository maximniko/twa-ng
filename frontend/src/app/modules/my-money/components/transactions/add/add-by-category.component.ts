import {Component} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {TwaService} from "../../../../../common/services/twa.service";
import {TransactionInputsComponent} from "../_form/transaction-inputs.component";
import {Category} from "../../../domains/categories/interfaces/category";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {TransactionsService} from "../../../domains/transactions/services/transactions.service";
import {AddComponent} from "./add.component";

@Component({
  standalone: true,
  imports: [CommonModule, TransactionInputsComponent, ReactiveFormsModule],
  templateUrl: './add.component.html',
})
export class AddByCategoryComponent extends AddComponent {

  override categoryItem!: Category

  constructor(
    private activatedRoute: ActivatedRoute,
    protected override twa: TwaService,
    protected override router: Router,
    protected override location: Location,
    override formBuilder: FormBuilder,
    override service: TransactionsService
  ) {
    super(twa, router, formBuilder, location, service);
    this.activatedRoute.data
      .subscribe((data: any) => {this.categoryItem = data.categoryItem})
  }
}
