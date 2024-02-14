const buttonElement = document.querySelector('.button')
const pElement = document.querySelector('.p')
const divElement = document.querySelector('.div')

buttonElement.addEventListener('click', function (event) {
  console.log('button')
  this.style.backgroundColor = '#05386b'
  console.log(event.target)
  console.log(event.currentTarget)
  // event.stopPropagation()
})

pElement.addEventListener('click', function (event) {
  console.log('p')
  this.style.backgroundColor = '#379683'
  console.log(event.target)
  console.log(event.currentTarget)

  // event.stopPropagation()
})

divElement.addEventListener(
  'click',
  function (event) {
    console.log('div')
    this.style.backgroundColor = '#5cdb95'
    console.log(event.target)
    console.log(event.currentTarget)
  },
  true
)

divElement.addEventListener('click', function (event) {
  console.log('div')
  this.style.backgroundColor = '#5cdb95'
  console.log(event.target)
  console.log(event.currentTarget)
})
