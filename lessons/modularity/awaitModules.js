// app.js

// import { add, sub, res } from './lessons/modularity/awaitModules.js'

// console.log(add(1, 3))
// console.log(sub(1, 3))

// console.log(res)

// module

const a = 2
console.log(a)

export function add(a, b) {
  return a + b
}

export function sub(a, b) {
  return a - b
}

export function div(a, b) {
  return a / b
}

// const url = 'https://dummyjson.com/products/'

// async function getProducts() {
//   const res = await fetch(url)
//   return res.json()
// }

// export const res = await getProducts()
