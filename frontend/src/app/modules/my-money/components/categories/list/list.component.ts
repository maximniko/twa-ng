import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Category} from "../../../domains/categories/interfaces/category";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {CategoriesService} from "../../../domains/categories/services/categories.service";
import {CategoriesFilter} from "../../../domains/categories/services/categories-filter";

@Component({
  selector: 'my-money-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  categories: Category[] = []

  constructor(private categoriesService = inject(CategoriesService)) {
  }

  ngOnInit(): void {
    this.categoriesService.list(new CategoriesFilter({})).subscribe(
      items => this.categories = items
    )
  }

  protected readonly symbols = symbols;
}
