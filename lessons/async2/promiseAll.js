const urls = [
  'https://dummyjson.com/products/',
  'https://dummyjson.com/products/1/',
  'https://dummyjson.com/products/categories/',
]

const fetchData = async () => {
  const promises = urls.map((url) => fetch(url))
  console.log('promises', promises)

  try {
    const data = Promise.all(promises)
      .then((resArr) => Promise.all(resArr.map((res) => res.json())))
      .then((dataArr) => console.log(dataArr))
    return data
    // const responses = await Promise.all(promises)
    // const dataArray = await Promise.all(responses.map((res) => res.json()))
    // console.log('dataArray', dataArray)
    // return dataArray
  } catch (error) {
    console.log(error)
  }
}
