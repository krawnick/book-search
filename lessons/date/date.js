const now = new Date()

console.log(new Date('01-02-2024'))
console.log(new Date('02 Jan 2024'))
console.log(new Date('01/02/2024'))
console.log('')
console.log(new Date('01/02/2024'))
console.log(new Date(2024, 0, 2))
console.log('')
console.log(new Date(2024, -1, 33))
console.log(Date.now())
console.log((Date.now() / 1000).toFixed(0))
console.log('')
console.log(now.getDay())
console.log(now.getDate())
console.log(now.getMonth())
console.log(now.getFullYear())
console.log(now.getTime())
console.log('')
console.log(now.setFullYear(2025))

/* __________________________________________________________ */

const date1 = new Date(2024, 10, 15)
const date2 = new Date(2024, 11, 15)
console.log(Number(date1))
console.log(date2 - date1)

function getDaysBetweenDates(dateFirst, dateSecond) {
  return (
    new Date(Number(new Date(dateFirst)) - Number(new Date(dateSecond))) /
    (24 * 60 * 60 * 1000)
  )
}

console.log(getDaysBetweenDates('01/02/2024', '02/02/2024'))

/* __________________________________________________________ */

const first = new Date(2024, 10, 3)
const second = new Date(2024, 10, 3)

console.log(first === second)
console.log(first.getTime() === second.getTime())
console.log(Number(first) === Number(second))

/* __________________________________________________________ */

const user = {
  name: 'Shoti',
  birthday: '02/7/2024',
}

const isBirthday = (user) => {
  const birthday = new Date(user.birthday)
  const now = new Date()
  //
  const isDay = birthday.getDate() === now.getDate()
  const isMonth = birthday.getMonth() === now.getMonth()

  if (isDay && isMonth) {
    return `${user.name} отмечает сегодня день рождения!`
  }

  return 'Обычный день.'
}

console.log(isBirthday(user))

/* __________________________________________________________ */

const date = new Date()

console.log(date)
console.log(new Intl.DateTimeFormat('ru-RU').format(date))

const options1 = {
  hour: 'numeric',
  minute: 'numeric',
}
console.log('RU', new Intl.DateTimeFormat('ru-RU', options1).format(date))

const options2 = {
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
}
console.log('US', new Intl.DateTimeFormat('en-US', options2).format(date))
console.log(
  'RU',
  new Intl.DateTimeFormat(navigator.language, options2).format(date)
)
