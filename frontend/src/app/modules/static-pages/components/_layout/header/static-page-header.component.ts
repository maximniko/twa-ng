import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {BreadcrumbsComponent} from "../../../../../common/components/breadcrumbs/breadcrumbs.component";
import {AlertsComponent} from "../../../../../common/components/alerts/alerts.component";
import {AlertComponent} from "../../../../../common/components/alerts/alert.component";
import {eventsRouteCreator} from "../../../../event-agency/events.routes";
import {AuthService} from "../../../../../modules/auth/auth.service";

@Component({
  selector: 'static-page-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, BreadcrumbsComponent, AlertsComponent, AlertComponent],
  templateUrl: './static-page-header.component.html'
})
export class StaticPageHeaderComponent {
  protected auth = inject(AuthService)
  protected readonly eventsRouteCreator = eventsRouteCreator;

  constructor(private router: Router) {
  }

  protected logout() {
    this.auth.clearToken()
    this.router.navigate(['/home'])
  }
}
