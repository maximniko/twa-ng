import {Component, OnInit} from '@angular/core';
import WebApp from "@twa-dev/sdk";

@Component({
  selector: 'app-twa',
  standalone: true,
  imports: [],
  templateUrl: './twa.component.html',
})
export class TwaComponent implements OnInit {
  protected count = 0

  showAlert(message: string, callback?: () => unknown) {
    WebApp.showAlert(message, callback)
  }

  showPopup() {
    WebApp.showPopup({
      title: 'Title',
      message: 'Some message',
      buttons: [
        {id: 'link', type: 'default', text: 'Open ton.org'},
        {type: 'cancel'},
      ]
    }, (btn) => {
      if (btn === 'link') {
        WebApp.openLink('https://ton.org/');
      }
    })
  }

  increment() {
    this.count += 1
  }

  toggleMainButton() {
    if (WebApp.MainButton.isVisible) {
      WebApp.MainButton.hide();
    } else {
      WebApp.MainButton.show();
    }
  }

  ngOnInit(): void {
    WebApp.ready()
    WebApp.MainButton.setParams({text: 'Main Button'})
    WebApp.MainButton.onClick(() => WebApp.showAlert('Main Button was clicked'))
    WebApp.MainButton.show()
  }

  openLink(link: string, options?: { try_instant_view: boolean }) {
    WebApp.openLink(link, options)
  }

  openTelegramLink(link: string) {
    WebApp.openTelegramLink(link)
  }

  expand(): void {
    WebApp.expand()
  }

  protected readonly print = print;
}
