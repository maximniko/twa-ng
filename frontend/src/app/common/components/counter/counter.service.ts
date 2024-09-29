import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class CounterService {
  private _count: number = 0

  get count() {
    return this._count
  }
  set count(newValue: number) {
    this._count = newValue
  }
}
