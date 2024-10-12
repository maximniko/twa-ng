import {Injectable} from '@angular/core';
import {SettingsInterface} from "./settings-interface";
import {Setting} from "../interface/setting";

@Injectable({providedIn: 'root'})
export class SettingsService implements SettingsInterface {
  item(): Setting {
    // get or create in tg
    return {
      maxPerMonth: 2310125
    }
  }

  save(setting: Setting): void {
    // save to tg
  }
}
