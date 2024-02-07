function convert(sum, currency, convCurrency) {
  const allCurrencies = [
    { name: 'USD', mult: 1 },
    { name: 'RUB', mult: 1 / 100 },
    { name: 'EUR', mult: 1.1 },
  ]

  const initial = allCurrencies.find((c) => c.name === currency)
  const convert = allCurrencies.find((c) => c.name === convCurrency)

  if (!initial || !convert) {
    return null
  }

  return `${new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency,
  }).format(sum)} => ${new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: convCurrency,
  }).format((sum * initial.mult) / convert.mult)}`
}

console.log(convert(50, 'USD', 'RUB'))
console.log(convert(1000, 'RUB', 'USD'))
console.log(convert(110, 'USD', 'EUR'))
console.log(convert(110, 'RUB', 'EUR'))
