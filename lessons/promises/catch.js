const url = 'https://dummyjson.com/products/'

const res = fetch(url)
  .then(
    (res) => {
      console.log(res)
      return res.json()
    }
    // (error) => console.log(error)
  )
  .then(
    ({ products }) => {
      console.log('products', products)
      return fetch(url + products[0].id)
    }
    // (error) => console.log(error)
  )
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error))
