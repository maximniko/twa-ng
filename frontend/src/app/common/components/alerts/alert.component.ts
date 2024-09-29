import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Alert} from "./interfaces/Alert";
import {AlertsService} from "./alerts.service";
import {timer} from "rxjs";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="alert alert-dismissible fade show" [ngClass]="'alert-' + alert.type" role="alert">
          {{ alert.message }}
          <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="alert" (click)="close()"></button>
      </div>
  `,
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() alert!: Alert;

  protected isOpen = false

  constructor(private alertService: AlertsService) {
  }

  ngOnInit() {
    this.isOpen = !this.isOpen
  }

  ngOnDestroy() {
    this.isOpen = !this.isOpen
  }

  close(timeToClose: number = 500) {
    timer(timeToClose).subscribe(() => this.alertService.removeAlert(this.alert))
  }
}
