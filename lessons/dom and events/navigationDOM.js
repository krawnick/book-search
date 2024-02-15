const rootElement = document.querySelector('#root')

const buttonFirstElement = document.createElement('button')
buttonFirstElement.innerHTML = 'First button'
buttonFirstElement.classList.add('button')

const buttonSecondElement = document.createElement('button')
buttonSecondElement.innerHTML = 'Second button'
buttonSecondElement.classList.add('button')

const buttonThirdElement = document.createElement('button')
buttonThirdElement.innerHTML = 'Third button'
buttonThirdElement.classList.add('button')

rootElement.append(buttonFirstElement, buttonSecondElement, buttonThirdElement)

console.log(rootElement.childNodes)
console.log(rootElement.children)
console.log([...rootElement.children])

console.log(rootElement.parentElement)
console.log(rootElement.parentNode)

console.log(buttonFirstElement.closest('.root'))

console.log(rootElement.previousElementSibling)
console.log(rootElement.previousSibling)

console.log(rootElement.nextElementSibling)
console.log(rootElement.nextSibling)

console.log(buttonFirstElement.parentElement.children)

console.log(rootElement.querySelectorAll('.button'))
