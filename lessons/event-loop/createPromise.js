const promise = new Promise((resolve, reject) => {
  if (new Date() < new Date('01/01/2025')) {
    reject(new Error('Rejected'))
  }
  resolve('Success')
})

promise
  .then((data) => console.log(data))
  .catch((error) => console.error('!!!', error))

function timeout(seconds) {
  return new Promise((resolve /*, reject*/) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}

timeout(2)
  .then(() => {
    console.log('Timeout end!')
    return timeout(2)
  })
  .then(() => {
    console.log('Timeout end!')
  })
