console.log(document.body)

const root = document.querySelector('#root')
console.log('root', root)

const h1 = document.querySelectorAll('h1')
console.log('h1', h1[0])

const root2 = document.getElementById('root')
console.log('root2', root2)

const classElement = document.getElementsByClassName('title')
console.log('classElement', classElement)

const tagElement = document.getElementsByTagName('div')
console.log('tagElement', tagElement)

const buttonElement = document.createElement('button')
buttonElement.innerHTML = 'Hello World'

const buttonElementTwo = document.createElement('button')
buttonElementTwo.innerHTML = 'Bye World'

root.prepend(buttonElement)
buttonElement.after(buttonElementTwo)

function removeElement(element) {
  element.remove()
}

buttonElement.addEventListener('click', () => {
  deleteElement(buttonElementTwo)
})
