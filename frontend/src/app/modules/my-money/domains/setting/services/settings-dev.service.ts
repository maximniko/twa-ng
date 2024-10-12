import {Injectable} from '@angular/core';
import {SettingsInterface} from "./settings-interface";
import {Setting} from "../interface/setting";

@Injectable({providedIn: 'root'})
export class SettingsDevService implements SettingsInterface {
  dummy: Setting = {
    maxPerMonth: 10_000_000
  }

  item(): Setting {
    return this.dummy
  }

  save(setting: Setting): void {
    this.dummy = setting
  }
}
