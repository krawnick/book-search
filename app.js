'use strict'

const url = 'https://dummyjson.com/products/'
const request = new XMLHttpRequest()

request.open('GET', url)
request.send()

request.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText)
  console.log(products)

  const request2 = new XMLHttpRequest()
  request2.open('GET', url + products[0].id)
  request2.send()

  request2.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)
    console.log('data', data)

    const request3 = new XMLHttpRequest()
    request3.open('GET', url + products[1].id)
    request3.send()

    request3.addEventListener('load', function () {
      const data = JSON.parse(this.responseText)
      console.log('data', data)

      const request4 = new XMLHttpRequest()
      request4.open('GET', url + products[2].id)
      request4.send()

      request4.addEventListener('load', function () {
        const data = JSON.parse(this.responseText)
        console.log('data', data)

        const request5 = new XMLHttpRequest()
        request5.open('GET', url + products[3].id)
        request5.send()

        request5.addEventListener('load', function () {
          const data = JSON.parse(this.responseText)
          console.log('data', data)
        })
      })
    })
  })
})
