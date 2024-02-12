const url = 'https://dummyjson.com/productss/'

const getError = (error) => {
  const root = document.querySelector('#root')
  const errorElem = document.createElement('div')
  errorElem.id = 'error'
  errorElem.innerHTML = error
  root.prepend(errorElem)
}

const res = fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`)
    }
    return res.json()
  })

  .then(({ products }) => fetch(url + products[0].id))

  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`)
    }
    return res.json()
  })

  .then((data) => {
    return data
  })

  .catch((error) => {
    getError(error)
  })

  .finally(() => console.log('Finally'))
