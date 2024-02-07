let objA = { a: 1 }
let objB = { b: 2 }
let objC = { c: 3 }
let objD = { d: 4 }

const map = new WeakMap()
map.set(objA, 'testA').set(objB, 'testB')
console.log('map', map)
console.log('get', map.get(objA))
console.log('has', map.has(objA))
// console.log('delete', map.delete(objA))
objA = null

setTimeout(() => {
  console.log('1000ms', 'map', map)
}, 1000)

let cache = new WeakMap().set(objD, 256)

function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 999
    cache.set(obj, res)
  }
  return cache.get(obj)
}

const resB = getValue(objB)
console.log('resB', resB)

const resC = getValue(objC)
console.log('resC', resC)

const resD = getValue(objD)
console.log('resD', resD)
