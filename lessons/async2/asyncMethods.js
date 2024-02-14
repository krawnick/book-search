const url = 'https://dummyjson.com/products/'

class ProductsRepository {
  async getProducts() {
    const response = await fetch(url)
    console.log(await response.json())
  }
}

const repo = new ProductsRepository()
repo.getProducts()

const asyncArrow = async () => {
  const response = await fetch(url)
  console.log(await response.json())
}

asyncArrow()
