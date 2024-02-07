console.log(15 / 6) // 2.5
console.log(15 % 6) // 3
console.log(14 % 2) // 0
console.log(1 % 2) // 1

const isEven = (number) => {
  return Number(number) % 2 ? 'Число нечетное' : 'Число четное'
}

console.log(isEven('12'))
