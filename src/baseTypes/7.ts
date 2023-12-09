/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

export function isWeekend(day: Weekdays): boolean {
  if (day === Weekdays.SATURDAY || day === Weekdays.SUNDAY) {
    console.log(`${day} is  a weekend day`);
    return true;
  } else {
    console.log(`${day} isn't a  weekend day`);
    return false;
  }
}