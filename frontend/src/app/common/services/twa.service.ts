import {Injectable} from '@angular/core';
import WebApp from "@twa-dev/sdk";
import {PopupParams} from "@twa-dev/types";

@Injectable({providedIn: 'root'})
export class TwaService {

  constructor() {
    WebApp.ready();
    WebApp.MainButton.setParams({text: 'Main Button'})
    // WebApp.MainButton.onClick(() => WebApp.showAlert('Main Button was clicked'))
    // WebApp.MainButton.show()
  }

  getInitData(): string {
    return WebApp.initData
  }

  setMainButton(params: BottomButtonParams) {
    WebApp.MainButton.setParams(params)
  }

  toggleSettingsButton() {
    WebApp.SettingsButton.isVisible ? WebApp.SettingsButton.hide() : WebApp.SettingsButton.show()
  }

  toggleSecondaryButton() {
    WebApp.SecondaryButton.isVisible ? WebApp.SecondaryButton.hide() : WebApp.SecondaryButton.show()
  }

  toggleBackButton() {
    WebApp.BackButton.isVisible ? WebApp.BackButton.hide() : WebApp.BackButton.show()
  }

  showAlert(message: string, callback?: () => unknown) {
    WebApp.showAlert(message, callback)
  }

  showPopup(params: PopupParams, callback?: (id?: string) => unknown) {
    WebApp.showPopup(params, callback)
    // WebApp.showPopup({
    //   title: 'Title',
    //   message: 'Some message',
    //   buttons: [
    //     {id: 'link', type: 'default', text: 'Open ton.org'},
    //     {type: 'cancel'},
    //   ]
    // }, (btn) => {
    //   if (btn === 'link') {
    //     WebApp.openLink('https://ton.org/');
    //   }
    // })
  }

  toggleMainButton() {
    WebApp.MainButton.isVisible ? WebApp.MainButton.hide() : WebApp.MainButton.show()
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
}

type BottomButtonParams = {
  color?: string;
  text?: string;
  text_color?: string;
  is_active?: boolean;
  is_visible?: boolean;
  has_shine_effect?: boolean;
};
