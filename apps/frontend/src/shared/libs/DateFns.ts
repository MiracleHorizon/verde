import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'

export class DateFns {
  public static format(date: Date, dateFormat: string): string {
    return format(new Date(date), dateFormat, {
      locale: ru,
      weekStartsOn: 1
    })
  }
}
