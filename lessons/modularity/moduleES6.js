// app.js

import { add, sub } from './lessons/modularity/moduleES6.js'

console.log('Second call')

console.log(add(1, 3))
console.log(sub(1, 3))

setTimeout(() => {
  console.log(add(4, 4))
}, 1000)

setTimeout(() => {
  console.log(add(4, 4))
}, 2000)

// module

export function add(a, b) {
  return a + b
}

export function sub(a, b) {
  return a - b
}

console.log('First call')

setTimeout(() => {
  add = function (a, b) {
    return a * b
  }
}, 1500)
