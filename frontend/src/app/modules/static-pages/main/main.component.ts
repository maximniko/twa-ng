import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SymbolsComponent} from "../../../common/components/symbols/symbols.component";
import {symbols} from "../../../common/components/symbols/symbols";

@Component({
  selector: 'static-page-main',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SymbolsComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  protected readonly symbols = symbols;
}
