// fetch('https://dummyjson.com/products/')
const url = 'https://dummyjson.com/products/'

const getProduct = (id) => {
  const request = new XMLHttpRequest()
  request.open('GET', url + id)
  request.send()

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)
    console.log(data)
  })
}

getProduct(1)
getProduct(2)
getProduct(3)

console.log('end')
