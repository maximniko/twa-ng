import { Component } from '@angular/core';
import WebApp from "@twa-dev/sdk";

@Component({
  selector: 'app-twa',
  standalone: true,
  imports: [],
  templateUrl: './twa.component.html',
})
export class TwaComponent {
  protected count = 0

  constructor() {
    WebApp.ready();
  }

  onClick() {
    WebApp.showAlert(`Hello World! Current count is ${this.count}`)
  }
  increment() {
    this.count += 1
  }
}
