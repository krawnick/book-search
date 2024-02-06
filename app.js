'use strict'

let objA = { a: 1 }
let objB = { b: 2 }

const set = new WeakSet([objA, objB])
console.log('set', set)

objA = null

setTimeout(() => {
  console.log('1000ms set', set)
}, 1000)
