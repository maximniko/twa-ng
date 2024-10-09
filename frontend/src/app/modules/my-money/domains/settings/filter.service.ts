import {Injectable} from "@angular/core";
import {clone} from "chart.js/helpers";

@Injectable({providedIn: 'root'})
export class FilterService {
  public page: number = 0
  public _period: Period = Period.day;
  public get period() {
    return this._period
  }

  public set period(period: Period) {
    if (period == this._period) {
      return
    }
    this.page = 0
    this._period = period;
  }

  private format: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short'
  }

  pageNext(): void {
    this.page += 1
  }

  pagePrev(): void {
    if (this.page > 0) {
      this.page -= 1
    }
  }

  get fromTo(): FromTo {
    const from = new Date()
    const to = new Date()

    switch (this.period) {
      case Period.day:
        from.setDate(from.getDate() - this.page - 1)
        to.setDate(to.getDate() - this.page)
        break
      case Period.week:
        from.setDate(from.getDate() - this.page * 7 - 7)
        to.setDate(to.getDate() - this.page * 7)
        break
      case Period.month:
        from.setMonth(from.getMonth() - this.page - 1)
        to.setMonth(to.getMonth() - this.page)
        break
    }

    return {
      from: from,
      to: to,
    }
  }

  public getPeriodString(): string {
    const fromTo = this.fromTo;

    if (this.page === 0 || this.period == Period.day) {
      return this.label(fromTo.to)
    }

    return `${this.label(fromTo.from)} - ${this.label(fromTo.to)}`;
  }

  label(date: Date): string {
    if (this.page > 0) {
      if (this.period === Period.day) {
        const f = (clone(this.format))
        f.weekday = 'short'
        return date.toLocaleDateString('ru-RU', f);
      }
      return date.toLocaleDateString('ru-RU', this.format);
    }

    switch (this.period) {
      case Period.day:
        return 'Today';
      case Period.week:
        return 'This week';
      case Period.month:
        return 'This month';
    }
  }
}

interface FromTo {
  from: Date,
  to: Date
}

export enum Period {
  day = 'day',
  week = 'week',
  month = 'month'
}
