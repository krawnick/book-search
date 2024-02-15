(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  // app.js

  // import { add, sub, res } from './lessons/modularity/awaitModules.js'

  // console.log(add(1, 3))
  // console.log(sub(1, 3))

  // console.log(res)

  // module

  const a$1 = 2;
  console.log(a$1);

  function add(a, b) {
    return a + b
  }

  function sub(a, b) {
    return a - b
  }

  // const url = 'https://dummyjson.com/products/'

  // async function getProducts() {
  //   const res = await fetch(url)
  //   return res.json()
  // }

  // export const res = await getProducts()

  const a = 1;
  console.log(a);

  console.log(add(1, 3));
  console.log(sub(1, 3));

}));
