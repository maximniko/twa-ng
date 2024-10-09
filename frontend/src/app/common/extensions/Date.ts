export function toLocalDate(
  date: Date,
  locale: Intl.LocalesArgument,
  options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  },
): string {
  return date.toLocaleDateString(locale, options)
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

  return `${date.getFullYear()}-${month}-${day}`
}
