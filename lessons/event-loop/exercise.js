const url = 'https://dummyjson.com/products/'

const myFetch = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.open('GET', url)
    request.send()

    request.addEventListener('load', function () {
      if (this.status > 400) {
        reject(new Error(this.status))
      }
      resolve(this.responseText)
    })

    request.addEventListener('error', function () {
      reject(new Error(this.status))
    })

    request.addEventListener('timeout', function () {
      reject(new Error('Timeout'))
    })
  })
}

myFetch(url)
  .then((res) => console.log(res))
  .catch((error) => console.error(error))
