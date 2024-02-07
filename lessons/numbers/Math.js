// Methods

console.log(Math.sqrt(36)) // 6
console.log(Math.cbrt(27)) // 3

console.log(16 ** (1 / 4)) // 2
console.log(2 ** 3) // 8

console.log(Math.sign(-100)) // -1
console.log(Math.sign(35)) // 1

console.log(Math.abs(-100)) // 100
console.log(Math.abs(100)) // 100

console.log(Math.exp(1)) // 2.718...

console.log(Math.max(false, -2, 10, true, 19)) // 19
console.log(Math.min(1, '-2', 10, 0, 19)) // -2

console.log(Math.max(false, true)) // 1
console.log(Math.min(false, true)) // 0

console.log(Math.random()) // [0..1)
console.log(Math.floor(Math.random() * 10)) // [0..10)

// Rounding

console.log(Math.round(1.4)) // 1
console.log(Math.round(1.5)) // 2

console.log(Math.ceil(2.1)) // 3
console.log(Math.ceil(2.9)) // 3

console.log(Math.floor(2.1)) // 2
console.log(Math.floor(2.9)) // 2

console.log(Math.trunc(4.9)) // 4
console.log(Math.trunc(4.1)) // 4

console.log((1.4999999).toFixed(1)) // "1.5"
