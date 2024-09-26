import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TwaComponent} from "./modules/twa/twa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TwaComponent],
  template: '<app-twa></app-twa>' +
    '<router-outlet />'
})

export class AppComponent {
}
