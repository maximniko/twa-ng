import {Setting} from "../interface/setting";

export interface SettingsInterface {
  item(filter: Setting): Setting
  save(setting: Setting): void
}
