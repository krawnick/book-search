const buttonElement = document.querySelector('.button')

const eventHandler = function (event) {
  console.log('Event 1')
}

buttonElement.addEventListener('mouseover', eventHandler)
buttonElement.addEventListener('click', (event) => {
  console.log('Event 2')
  buttonElement.removeEventListener('click', eventHandler)
})
