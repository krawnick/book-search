const product1 = { id: 1, name: 'Banana' }
const product2 = { id: 2, name: 'Apple' }

const Cart = function () {
  this.products = []
}

Cart.prototype.addProduct = function (product) {
  if (this.products.find((prod) => prod.id === product.id)) {
    return
  }
  this.products.push({ ...product, count: 1 })
}

Cart.prototype.countPlus = function (id) {
  this.products.map((prod) => {
    if (prod.id === id) {
      prod.count++
    }
  })
}

Cart.prototype.countMinus = function (id) {
  this.products.map((prod) => {
    if (prod.id === id && prod.count > 1) {
      prod.count--
    } else {
      this.products = this.products.filter((p) => p.id != id)
    }
  })
}

const cart = new Cart()
console.log('cart', cart)

cart.addProduct(product1)
cart.addProduct(product2)

// cart.countPlus(2)
// cart.countMinus(1)
// cart.countMinus(2)
// cart.countMinus(2)

console.log('cart', cart)
