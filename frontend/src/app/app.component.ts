import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwaComponent } from "./components/twa/twa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TwaComponent],
  template: '<router-outlet />',
  host:{class:'h-100'}
})

export class AppComponent {
}
