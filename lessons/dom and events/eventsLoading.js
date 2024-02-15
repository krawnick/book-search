document.addEventListener('DOMContentLoaded', function (event) {
  console.log(event)
  console.log('DOMContentLoaded')
})

window.addEventListener('load', function (event) {
  console.log(event)
  console.log('load')
})

// window.addEventListener('beforeunload', function (event) {
//   console.log(event)
//   event.preventDefault()
//   event.returnValue = ''
// })
