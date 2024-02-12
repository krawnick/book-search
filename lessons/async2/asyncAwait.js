const url = 'https://dummyjsons.com/products/'

const getProducts = async () => {
  const productsResponse = await fetch(url)
  const { products } = await productsResponse.json()
  console.log('products', products)

  const productResponse = await fetch(url + products[0].id)
  const product = await productResponse.json()
  console.log('product', product)
}

getProducts()
