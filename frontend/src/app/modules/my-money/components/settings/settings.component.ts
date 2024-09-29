import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routeCreator} from "../../my-money.routes";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  protected readonly routeCreator = routeCreator;
}
