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
    WebApp.ready()
  }

  showAlert() {
    WebApp.showAlert(`Hello World! Current count is ${this.count}`)
  }

  showPopup() {
    WebApp.showPopup({
      title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis deleniti dignissimos dolore dolorem earum expedita facilis ipsa iure labore, laudantium libero natus odio officiis perferendis praesentium quas quasi suscipit.',
      buttons: [
        {type: "default", text: "Default btn"},
        {type: "destructive", text: "destructive btn"},
        {type: "ok"},
      ]
    })
  }
  increment() {
    this.count += 1
  }
}
