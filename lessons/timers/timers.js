console.log(1)

const messages = ['Bash!', 'Boom!']

const boomTimer = setTimeout(
  (message1, message2) => {
    console.log(2)
    console.log(message1, message2)
  },
  2000,
  ...messages
)
// clearTimeout(boomTimer)
console.log(3)

/* _____________________________________________ */

const mark1 = performance.now(1)

setTimeout(() => {
  const mark2 = performance.now(2)
  console.log(mark2 - mark1)
}, 1000)
