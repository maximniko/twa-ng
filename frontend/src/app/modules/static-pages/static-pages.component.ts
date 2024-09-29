import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {StaticPageHeaderComponent} from "./components/_layout/header/static-page-header.component";
import {StaticPageFooterComponent} from "./components/_layout/footer/static-page-footer.component";
import {SymbolsComponent} from "../../common/components/symbols/symbols.component";

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, StaticPageHeaderComponent, StaticPageFooterComponent, SymbolsComponent],
  templateUrl: './static-pages.component.html',
  host: {'class': 'd-flex flex-column h-100'}
})
export class StaticPagesComponent {

}
