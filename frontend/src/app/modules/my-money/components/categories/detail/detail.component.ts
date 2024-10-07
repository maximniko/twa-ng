import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../../domains/categories/interfaces/category";
import {TwaService} from "../../../../../common/services/twa.service";
import {routeCreator} from "../../../my-money.routes";

@Component({
  selector: 'my-money-category-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit, OnDestroy {
  categoryItem!: Category

  constructor(
    private activatedRoute: ActivatedRoute,
    private twa: TwaService,
    private router: Router
  ) {
    this.goToMain = this.goToMain.bind(this)
    this.goToCategories = this.goToCategories.bind(this)
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: any) => this.categoryItem = data['categoryItem'])
    this.twa.backButtonOnClick(this.goToCategories)
    this.twa.setSecondaryButton(
      {text: 'Edit', is_visible: true, is_active: true, position: 'right'},
      this.goToMain,
    )
    this.twa.setMainButton(
      {text: 'Main', is_visible: true, is_active: true},
      this.goToMain,
    )
  }

  goToMain() {
    this.router.navigate([routeCreator.main()])
  }

  goToCategories() {
    this.router.navigate([routeCreator.categories()])
  }

  ngOnDestroy() {
    this.twa.offBackButton(this.goToCategories)
    this.twa.offSecondaryButton(this.goToMain)
    this.twa.offMainButton(this.goToMain)
  }
}
