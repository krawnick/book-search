const promise = new Promise((resolve) => {
  console.log('Constructor')
  setTimeout(() => {
    resolve('Timer')
  }, 0)
})

promise.then((data) => {
  console.log(data)
})

Promise.resolve('Instant').then((data) => console.log(data))

Promise.reject(new Error('Error')).catch((error) => console.error(error))
