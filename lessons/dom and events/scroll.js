function generate() {
  const y = window.scrollY
  const clientWidth = document.documentElement.clientWidth
  const positionEvent = event.target.getBoundingClientRect()

  console.log('Y offset', y)
  console.log('clientWidth', clientWidth)
  console.log('positionEvent', positionEvent)

  const downElement = document.querySelector('.down')
  const rectDownElement = downElement.getBoundingClientRect()

  window.scrollTo({
    left: window.scrollX + rectDownElement.left,
    top: window.scrollY + rectDownElement.top,
    behavior: 'smooth',
  })
}

// generate()
