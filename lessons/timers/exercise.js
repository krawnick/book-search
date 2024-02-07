/**
 *  @param {number} timer  время в секундах
 *  @returns {void}  undefined
 */
const pizzaTimer = (timer) => {
  let time = timer * 1000 + 100

  const intlTime = (time) => {
    return new Intl.DateTimeFormat(navigator.language, {
      minute: 'numeric',
      second: 'numeric',
    }).format(time)
  }

  const interval = setInterval(() => {
    time = time - 1000
    console.log(intlTime(time))
  }, 1000)

  setTimeout(() => {
    clearInterval(interval)
    console.log('Pizza ready 🍕')
  }, time)
}

pizzaTimer(2)
