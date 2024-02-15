// module

'use strict'

function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

module.exports = { add, sub }

// app.js

;('use strict')

const { add, sub } = require('./lessons/modularity/commonJS')

console.log(add(1, 3))
console.log(sub(1, 3))
