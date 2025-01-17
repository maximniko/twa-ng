import {Injectable} from "@angular/core";
import {clone} from "chart.js/helpers";
import {Subject} from "rxjs";
import {FromTo, fromToByMonth, fromToByWeek} from "../interfaces/from-to";
import {getDaysInMonth, getWeeksInMonth} from "../../../../../common/extensions/Date";
import {TwaService} from "../../../../../common/services/twa.service";

@Injectable({providedIn: 'root'})
export class FilterService {
  nextFromTo: Subject<FromTo> = new Subject<FromTo>
  public page: number = 0
  public maxPage: number = 12
  public _period: Period = Period.day;
  public get period() {
    return this._period
  }

  constructor(private twa: TwaService) {
  }

  resetPage() {
    this.page = 0
    this.nextFromTo.next(this.fromTo)
  }

  public set period(period: Period) {
    if (period == this._period) {
      return
    }
    this._period = period;
    this.resetPage()
  }

  private format: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short'
  }

  pageNext(): void {
    if (this.page < this.maxPage) {
      this.page += 1
      this.nextFromTo.next(this.fromTo)
    }
  }

  pagePrev(): void {
    if (this.page > 0) {
      this.page -= 1
      this.nextFromTo.next(this.fromTo)
    }
  }

  get fromTo(): FromTo {
    switch (this.period) {
      case Period.day:
        const from = new Date(), to = new Date()
        from.setDate(from.getDate() - this.page - 1)
        to.setDate(to.getDate() - this.page)
        return {
          from: from,
          to: to,
        }
      case Period.week:
        return fromToByWeek(this.page)
      case Period.month:
        return fromToByMonth(this.page)
    }
  }

  public getPeriodString(): string {
    const fromTo = this.fromTo;

    if (this.period == Period.day
      || fromTo.from.getDay() == 1 && this.period == Period.week
      || fromTo.from.getDate() == 1 && this.period == Period.month
    ) {
      return this.label(fromTo.to)
    }

    return `${this.label(fromTo.from)} - ${this.label(fromTo.to)}`;
  }

  label(date: Date): string {
    const lang = this.twa.getUserLanguageCode() ?? 'en'

    if (this.period === Period.day) {
      const f = (clone(this.format))
      f.weekday = 'short'
      return date.toLocaleDateString(lang, f);
    }
    return date.toLocaleDateString(lang, this.format);
  }

  isLastPage(): boolean {
    return this.page >= this.maxPage
  }

  isFirstPage(): boolean {
    return this.page < 1
  }

  get coefficient(): number {
    switch (this.period) {
      case Period.day:
        return 1 / getDaysInMonth()
      case Period.week:
        return 1 / getWeeksInMonth()
      case Period.month:
        return 1
    }
  }
}

export enum Period {
  day = 'day',
  week = 'week',
  month = 'month'
}
