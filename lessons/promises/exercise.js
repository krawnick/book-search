const url = 'https://dummyjson.com/products/categories/'

const createSelect = (options) => {
  const root = document.querySelector('#root')
  const select = document.createElement('select')

  // select.innerHTML = `<select>
  // ${options.map((el) => `<option>${el}</option>`)}
  // </select>`

  options
    .map((el) => {
      const option = document.createElement('option')
      option.innerHTML = el
      option.value = el
      return option
    })
    .sort((a, b) => a.value.localeCompare(b.value))
    .map((el) => select.append(el))

  root.prepend(select)
}

const getCategories = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      createSelect(data)
    })
}

getCategories()
