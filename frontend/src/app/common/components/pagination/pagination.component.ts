import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Pagination} from "./interfaces/pagination";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input() pagination?: Pagination<any>
  @Output() newPage = new EventEmitter<number>();

  get currentPage(): number | undefined {
    return this.pagination!!.currentPage
  }

  set currentPage(newValue: number) {
    if (newValue == this.pagination!!.currentPage) {
      return
    }

    this.pagination!!.currentPage = newValue
    this.newPage.emit(newValue)
  }

  get isShowPagination(): boolean {
    return this.pagination!!.total > 0
  }

  get isFirstPage(): boolean {
    return this.currentPage == 1
  }

  get isLastPage(): boolean {
    return this.currentPage == this.lastPage
  }

  private get lastPage(): number {
    return Math.ceil(this.pagination!!.total / this.pagination!!.perPage)
  }

  isCurrent(page: number): boolean {
    return this.pagination!!.currentPage == page
  }

  get getPages(): number[] {
    return [...Array(this.lastPage).keys()].map((i) => i + 1)
  }
}
