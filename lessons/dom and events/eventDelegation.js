const rootElement = document.querySelector('#root')

for (let i = 1; i < 25; i++) {
  const el = document.createElement('div')
  el.classList.add('idea')
  el.setAttribute('data-id', i)
  el.innerHTML = `Пользователь с ID ${i}`
  // el.addEventListener('click', () => {
  //   console.log(i)
  // })
  rootElement.append(el)
}

root.addEventListener('click', (event) => {
  const userId = event.target.getAttribute('data-id')
  if (userId === null) {
    return
  }
  console.log('Удален пользователь с ID', userId)
})
