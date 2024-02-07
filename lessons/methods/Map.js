const weatherObj = {
  london: '10',
  moscow: '4',
  paris: '12',
}

const weatherMap = new Map()
weatherMap.set('London', '10').set('Moscow', '4').set('Paris', '12')

console.log(weatherMap.has('London'))

weatherMap.delete('London')

console.log('weatherMap', weatherMap)
console.log('weatherMap', weatherMap.get('London'))

weatherMap.clear()

const arr2 = [4, 5, 6]

weatherMap
  .set(1, 5)
  .set(true, 'yes')
  .set(false, '!no')
  .set(false, 'no')
  .set([1, 2, 3], 'array')
  .set(arr2, 'array2')
  .set({ a: 1 }, { b: 1 })
  .set({ a: 1 }, { b: 1 })

console.log('weatherMap', weatherMap)
console.log('size', weatherMap.size)
console.log('get', weatherMap.get([1, 2, 3]))
console.log('get', weatherMap.get(arr2))

/* _____________________________________________ */

const weather = [
  ['London', 10],
  ['Moscow', 4],
  ['Paris', 12],
]

const weatherMap2 = new Map(weather)

console.log('weatherMap2', weatherMap2)

const weatherObj2 = {
  london: 10,
  moscow: 4,
  paris: 12,
}

const weatherMap3 = new Map(Object.entries(weatherObj3))
console.log('weatherMap3', weatherMap3)

/* _____________________________________________ */

const foodMap = new Map([
  ['cat', 'fish'],
  ['dog', 'meat'],
  ['rat', 'cheese'],
])

for (const [key, value] of foodMap) {
  console.log(key, ': ', value)
}

console.log([...foodMap])
console.log('keys', [...foodMap.keys()])
console.log('values', [...foodMap.values()])

/* _____________________________________________ */

// Поменять местами ключи и значения.

const carPriceMap = new Map([
  ['toyota', 320],
  ['kia', 700],
  ['honda', 500],
])

const newCarPriceMap = new Map()

for (const [key, value] of carPriceMap) {
  newCarPriceMap.set(value, key)
}

console.log(newCarPriceMap)
