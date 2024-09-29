import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {symbols} from "../../../../common/components/symbols/symbols";
import {routeCreator} from "../../my-money.routes";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
})
export class MainComponent {
  protected readonly symbols = symbols;
  protected readonly routeCreator = routeCreator;
}
