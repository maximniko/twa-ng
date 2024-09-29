import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./components/_layout/header/header.component";
import {FooterComponent} from "./components/_layout/footer/footer.component";
import {SymbolsComponent} from "../../common/components/symbols/symbols.component";

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SymbolsComponent],
  templateUrl: './my-money.component.html',
  host: {'class': 'd-flex flex-column h-100'}
})
export class MyMoneyComponent {

}
