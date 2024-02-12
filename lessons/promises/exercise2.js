const url = 'https://dummyjson.com/products/'

function getData(url, errorMessage, method = 'GET') {
  return fetch(url, { method }).then((res) => {
    if (!res.ok) {
      throw new Error(`${errorMessage}: ${res.status}`)
    }
    return res.json()
  })
}

getData(url, '1. Can not get products')
  .then(({ products }) => {
    console.log(products)
    return getData(url + products[0].id, '2. Can not get product')
  })
  .then((data) => {
    console.log(data)
    return data
  })

  .catch((error) => {
    console.log(error)
  })

  .finally(() => console.log('Finally'))
