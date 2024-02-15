function searchElement(event) {
  const value = event.target.value
  const elements = [...contaiterElement.children]

  elements.map((element) => {
    if (element.innerHTML.includes(value.trim()) && value) {
      element.style.backgroundColor = 'var(--error)'
    } else {
      element.style.backgroundColor = 'var(--black-lighten)'
    }
  })
}

const rootElement = document.querySelector('#root')

const contaiterElement = document.createElement('div')
contaiterElement.classList.add('.container')
contaiterElement.addEventListener('click', (event) => {
  if (event.target.closest('div').classList.value === 'idea') {
    inputElement.value = event.target.innerHTML
  }
})

const formElement = document.createElement('form')
formElement.innerHTML = 'Search'
formElement.classList.add('form')
formElement.addEventListener('submit', (event) => {
  event.preventDefault()
})

const inputElement = document.createElement('input')
inputElement.classList.add('input')
inputElement.addEventListener('input', (e) => searchElement(e))

for (let i = 1; i <= 33; i++) {
  const divElement = document.createElement('div')
  divElement.innerHTML = i
  divElement.classList.add('idea')
  contaiterElement.append(divElement)
}

rootElement.prepend(contaiterElement)
rootElement.prepend(formElement)
formElement.append(inputElement)
