import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {currentYear} from "../../../../../common/extensions/Functions";

@Component({
  selector: 'static-page-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './static-page-footer.component.html',
  host: {'class': 'footer mt-auto'}
})
export class StaticPageFooterComponent {

  protected readonly currentYear = currentYear;
}
