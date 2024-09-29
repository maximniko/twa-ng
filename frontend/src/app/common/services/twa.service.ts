import {Injectable} from '@angular/core';
import WebApp from "@twa-dev/sdk";
import {PopupParams, SecondaryButton} from "@twa-dev/types";

@Injectable({providedIn: 'root'})
export class TwaService {

  constructor() {
    WebApp.ready();
    // WebApp.MainButton.onClick(() => WebApp.showAlert('Main Button was clicked'))
    // WebApp.MainButton.show()
  }

  getInitData(): string {
    return WebApp.initData
  }

  setMainButton(params: BottomButtonParams, onClick: VoidFunction) {
    WebApp.MainButton.setParams(params)
    WebApp.MainButton.onClick(onClick)
  }

  setSecondaryButton(params: SecondaryButton) {
    WebApp.SecondaryButton.setParams(params)
  }

  toggleSettingsButton() {
    this._toggleButtonVisible(WebApp.SettingsButton)
  }

  toggleSecondaryButton() {
    this._toggleButtonVisible(WebApp.SecondaryButton)
  }

  toggleBackButton() {
    this._toggleButtonVisible(WebApp.BackButton)
  }

  backButtonShow() {
    WebApp.BackButton.show()
  }

  backButton(cb: VoidFunction) {
    this.backButtonShow()
    WebApp.BackButton.onClick(cb)
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
    this._toggleButtonVisible(WebApp.MainButton)
  }

  private _toggleButtonVisible(button: ButtonVisible) {
    button.isVisible ? button.hide() : button.show()
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
}

interface ButtonVisible {
  isVisible?: boolean;
  show: VoidFunction;
  hide: VoidFunction;
}
