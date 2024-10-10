import {Injectable} from "@angular/core";
import {TwaService} from "./twa.service";

@Injectable({providedIn: 'root'})
export class Localisation {
  t: Texts = {}

  constructor(private twa: TwaService) {
  }

  load(): Promise<boolean> {
    const locale = this.twa.getUserLanguageCode()

    return fetch(`assets/messages/${locale}.json`)
      .then(res => res.json())
      .catch(() => fetch(`assets/messages/en.json`)
        .then(res => res.json()))
      .then((json: Texts) => {
        this.t = json as Texts;
        return true
      })
  }
}

type Texts = {
  [key in Key]?: string | undefined;
}

export type Key = "hello" | "mainCalculations" | "bye"
