const url = 'https://dummyjson.com/products/'

const getProduct = async (id) => {
  const response = await fetch(url + id)
  return response.json()
}

const getProductError = async (id) => {
  const response = await fetch(url + 's/' + id)
  return response.json()
}

const main = async () => {
  const res1 = await Promise.all([getProduct(1), getProduct(2)])
  console.log(res1)
  const res2 = await Promise.allSettled([getProduct(1), getProduct(2)])
  console.log(res2)
  const res3 = await Promise.race([getProduct(1), getProduct(2)])
  console.log(res3)
}

main()
