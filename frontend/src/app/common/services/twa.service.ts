import {Injectable} from '@angular/core';
import WebApp from "@twa-dev/sdk";
import {PopupParams, SecondaryButton} from "@twa-dev/types";

@Injectable({providedIn: 'root'})
export class TwaService {

  constructor() {
    WebApp.ready();
    WebApp.expand();
    if (WebApp.colorScheme) {
      document.documentElement.setAttribute('data-bs-theme', WebApp.colorScheme)
    }
    WebApp.onEvent("themeChanged", () => {
      document.documentElement.setAttribute('data-bs-theme', WebApp.colorScheme)
    })

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
  setMainButtonOffClick(onClick: VoidFunction) {
    WebApp.MainButton.offClick(onClick)
  }

  setSecondaryButton(params: SecondaryButton) {
    WebApp.SecondaryButton.setParams(params)
  }

  visibleSettingsButton(show: boolean) {
    this._buttonVisible(WebApp.SettingsButton, show)
  }

  visibleSecondaryButton(show: boolean) {
    this._buttonVisible(WebApp.SecondaryButton, show)
  }

  visibleBackButton(show: boolean) {
    this._buttonVisible(WebApp.BackButton, show)
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

  visibleMainButton(show: boolean) {
    this._buttonVisible(WebApp.MainButton, show)
  }

  mainButtonIsActive(isActive: boolean) {
    isActive ? WebApp.MainButton.enable() : WebApp.MainButton.disable()
  }

  private _buttonVisible(button: ButtonVisible, show: boolean) {
    show ? button.show() : button.hide()
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
