const url = 'https://dummyjson.com/products/'

const asyncArrow = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Ошибка')
  }
}

// asyncArrow()
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log(2)
//   })

;(async () => {
  console.log(1)
  const res = await asyncArrow()
  console.log(res)
  console.log(2)
})()
