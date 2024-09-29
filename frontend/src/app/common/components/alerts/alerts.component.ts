import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertsService} from "./alerts.service";
import {AlertComponent} from "./alert.component";

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  template: `
      <div class="container">
          @for (alert of alertService.alerts$ | async;track alert.message) {
              <app-alert *ngFor="let alert of alertService.alerts$ | async" [alert]="alert"></app-alert>
          }
      </div>
  `,
  host: {'class': 'w-100 py-4'}
})
export class AlertsComponent {
  constructor(protected alertService: AlertsService) {
  }
}
