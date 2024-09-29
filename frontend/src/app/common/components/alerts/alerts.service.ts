import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, timer} from "rxjs";
import {Alert} from "./interfaces/Alert";

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private alertsSubject: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([]);
  public alerts$: Observable<Alert[]> = this.alertsSubject.asObservable();

  constructor() {
  }

  addAlert(alert: Alert, timeToClose: number = 5000) {
    const alerts: Alert[] = this.alertsSubject.getValue();
    alerts.push(alert);
    this.alertsSubject.next(alerts);
    timer(timeToClose).subscribe(() => this.removeAlert(alert));
  }

  removeAlert(alert: Alert) {
    let alerts = this.alertsSubject.getValue();
    alerts = alerts.filter(x => x !== alert);
    this.alertsSubject.next(alerts);
  }
}
