const bigOne = 350_500_000
const bigTwo = 350500000

console.log(bigOne === bigTwo) //true

console.log(Number.MAX_SAFE_INTEGER) // 2**53 -1
// Дальше работа небезопасна (некорректный результат)

console.log(762374102874230746230746234702047n)
console.log(BigInt(762374102874230746230746234702047))
console.log(BigInt('762374102874230746230746234702047'))

console.log(10n + 10n) // 20n
console.log(10n * 10n) // 100n
console.log(10n / 10n) // 1n

console.log(
  1111111111111111111111111111111111111111111n +
    1111111111111111111111111111111111111111111n
)

console.log(10n < 20) // true
console.log(10n == 10) // true
console.log(10n === 10) // false

// console.log(10.55n) // ERROR
console.log(10n / 3n) // 3n
