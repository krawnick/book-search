const url = 'https://dummyjson.com/products/'

const res = fetch(url)
  .then((res) => res.json())
  .then(({ products }) => fetch(url + products[0].id))
  .catch((error) => console.log('ERROR1: ', error))
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => console.log('ERROR2: ', error))
  .finally(() => console.log('Finally'))
