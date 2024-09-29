import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbItem} from "./interfaces/breadcrumb-item";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {BreadcrumbService} from "./breadcrumb.service";

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  breadcrumbs$: Observable<BreadcrumbItem[]>;
  show = false;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
    this.breadcrumbs$.subscribe(items => this.show = items.length > 1)
  }
}
