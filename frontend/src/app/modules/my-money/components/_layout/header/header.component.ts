import {Component, inject, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {routeCreator} from "../../../my-money.routes";
import {symbols} from "../../../../../common/components/symbols/symbols";
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {Localisation} from "../../../../../common/services/localisation";

@Component({
  selector: 'my-money-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private offcanvasService = inject(NgbOffcanvas)

  constructor(
    protected localisation: Localisation
  ) {
  }
  protected readonly routeCreator = routeCreator;
  protected readonly symbols = symbols;

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      // .result.then(
      // (result) => {
      //   this.closeResult = `Closed with: ${result}`;
      // },
      // (reason) => {
      //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // },
    // )
  }
}
