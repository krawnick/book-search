const url = 'https1://www.boredapi.com/api/activity'

const getIdeas = async () => {
  const response = await fetch(url)

  return response.json()
}

const fetchIdeas = async () => {
  try {
    const response = await Promise.all([getIdeas(), getIdeas(), getIdeas()])

    if (!response[0].activity) {
      throw new Error('Can not is get ideas')
    }
    return response
  } catch (error) {
    alert(error)
  }
}

const createUI = () => {
  const root = document.querySelector('#root')

  const buttonElement = document.createElement('button')
  buttonElement.classList.add('button')
  buttonElement.innerHTML = 'Generate'

  const ideasElement = document.createElement('div')
  ideasElement.classList.add('ideas')

  const showIdeas = async () => {
    const ideasFetch = await fetchIdeas()

    const ideas = ideasFetch.map((idea) => {
      const ideaElement = document.createElement('div')
      ideaElement.innerHTML = idea.activity
      ideaElement.classList.add('idea')
      return ideaElement
    })
    ideasElement.append(...ideas)
  }

  buttonElement.addEventListener('click', () => {
    if (!ideasElement.innerHTML) {
      showIdeas()
    } else {
      ideasElement.innerHTML = ''
      showIdeas()
    }
  })

  root.prepend(buttonElement, ideasElement)
}

createUI()
