import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {Category} from "../../../domains/categories/interfaces/category";
import {symbols} from "../../../../../common/components/symbols/symbols";

@Component({
  selector: 'my-money-category-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  categoryItem?: Category | undefined

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: any) => this.categoryItem = data.categoryItem)
  }

  protected readonly symbols = symbols;
}
