// app.js

'use strict'
;(function () {
  const a = 1

  console.log(APP.calc.add(1, 3))
  console.log(APP.calc.sub(1, 3))
})()

// module
;('use strict')

const APP = {}

;(function () {
  const a = 1

  function add(first, second) {
    return first + second
  }

  function sub(first, second) {
    return first - second
  }

  APP.calc = {
    add,
    sub,
  }
})()
