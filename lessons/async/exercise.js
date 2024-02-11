const url = 'https://dummyjson.com/products/'
const request = new XMLHttpRequest()

request.open('GET', url)
request.send()

request.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText)
  console.log('products', products)
  let averagePrice = products.reduce((acc, product) => {
    return product.price / products.length + acc
  }, 0)

  console.log('averagePrice', averagePrice)
})
