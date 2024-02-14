'use strict'
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
    const errorElem = document.querySelector('#error')
    errorElem.innerHTML = error
  })

  .finally(() => console.log('Finally'))
