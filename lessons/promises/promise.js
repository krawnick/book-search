const url = 'https://dummyjson.com/products/'

const res = fetch(url + 1)
  .then((json) => json.json())
  .then((data) => data)

// const res = fetch(url + 1)
//   .then((response) => {
//     const json = response.json()
//     console.log('json', json)
//     return json
//   })
//   .then((data) => {
//     console.log(data)
//     return data
//   })
// console.log('res', res)
