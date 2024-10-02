import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {currentYear} from "../../../../../common/extensions/Functions";

@Component({
  selector: 'my-money-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  host: {'class': 'footer mt-auto py-3'}
})
export class FooterComponent {
  protected readonly currentYear = currentYear;
}
