import {Component, OnDestroy} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TwaService} from "./common/services/twa.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  host: {class: 'h-100'}
})

export class AppComponent implements OnDestroy {

  constructor(private twa: TwaService) {
    this.twa.ready()
  }

  ngOnDestroy() {
    this.twa.close()
  }
}
