const url = 'https://dummyjson.com/products/'

const getProducts = async () => {
  try {
    const productsResponse = await fetch(url)
    if (!productsResponse.ok) {
      throw new Error(productsResponse.status)
    }
    const { products } = await productsResponse.json()
    console.log('products', products)

    const productResponse = await fetch(url + products[0].id)
    if (!productResponse.ok) {
    }
    const product = await productResponse.json()
    console.log('product', product)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Finally')
  }
}

getProducts()
