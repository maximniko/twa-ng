export function toLocalDate(date: Date, locale: Intl.LocalesArgument): string {
  return date.toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
  })
}

export function toParamDate(date: Date): string {
  let month = String(date.getUTCMonth()),
    day = String(date.getUTCDate())
  if (month.length < 2) {
    month = '0' + month
  }
  if (day.length < 2) {
    day = '0' + day
  }

  return `${date.getFullYear()}-${month}-${day}`}
