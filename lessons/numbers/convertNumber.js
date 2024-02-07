console.log(1 + 2 === 3) // true
console.log(0.1 + 0.2 === 0.3) // false

console.log(Number('4')) // 4
console.log(Number.parseInt('4 - число', 10)) // 4
console.log(+'4') // 4

console.log(Number.parseFloat('5.5', 10)) // 5.5
console.log(Number.parseFloat('5.5 - число', 10)) // 5.5

console.log(Number.isNaN(Number('5asd'))) // true
console.log(Number.isFinite(10 / 0)) // false

console.log(Number.isInteger(10.4)) // false
console.log(Number.isInteger(10)) // true
