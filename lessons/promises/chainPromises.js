const url = 'https://dummyjson.com/products/'

const res = fetch(url)
  .then((json) => json.json())
  .then(({ products }) => {
    console.log('products', products)
    return fetch(url + products[0].id)
  })
  .then((json) => json.json())
  .then((data) => {
    console.log(data)
  })
