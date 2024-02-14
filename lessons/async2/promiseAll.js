const url = 'https://dummyjson.com/products/'

async function getAllProducts() {
  const response = await fetch(url)
  return response.json()
}

async function getProduct(id) {
  const response = await fetch(url + id)
  return response.json()
}
async function getProductError(id) {
  const response = await fetch(url + 's/' + id)
  return response.json()
}

async function main() {
  const { products } = await getAllProducts()

  const res = await Promise.all(
    products.map((product) => getProduct(product.id))
  )
  console.log(res)
  // for (const product of products) {
  //   const res = await getProduct(product.id)
  //   console.log(res)
  // }
}

main()

// const urls = [
//   'https://dummyjson.com/products/',
//   'https://dummyjson.com/products/1/',
//   'https://dummyjson.com/products/categories/',
// ]

// const fetchData = async () => {
//   const promises = urls.map((url) => fetch(url))
//   console.log('promises', promises)

//   try {
//     const data = Promise.all(promises)
//       .then((resArr) => Promise.all(resArr.map((res) => res.json())))
//       .then((dataArr) => console.log(dataArr))
//     return data
//     // const responses = await Promise.all(promises)
//     // const dataArray = await Promise.all(responses.map((res) => res.json()))
//     // console.log('dataArray', dataArray)
//     // return dataArray
//   } catch (error) {
//     console.log(error)
//   }
// }

// const products = async () => {
//   const urls = [
//     'https://dummyjson.com/products/4',
//     'https://dummyjson.com/products/5',
//     'https://dummyjson.com/products/6',
//   ]

//   const promises = urls.map(async (url) => {
//     const product = await fetch(url)
//     return product.json()
//   })

//   const data = await Promise.all(promises)
//   console.log(data)
// }

// products()
