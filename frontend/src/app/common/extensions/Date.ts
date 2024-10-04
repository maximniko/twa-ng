export function toLocalDate(date: Date, locale: Intl.LocalesArgument): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
