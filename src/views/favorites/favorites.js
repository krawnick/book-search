import onChange from 'on-change'
import { AbstractView } from '../../common/view'
import { Card } from '../../components/card/card'
import { Header } from '../../components/header/header'
import './favorites.css'

export class Favorites extends AbstractView {
  constructor(appState) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.setTitle('Favorites')
  }

  destroy() {
    onChange.unsubscribe(this.appState)
  }

  appStateHook(path) {
    if (path === 'favorites') {
      console.log('favorites')
      this.render()
    }
  }

  render() {
    this.app.innerHTML = ''
    this.app.prepend(new Header(this.appState).render())

    const favorites = document.createElement('div')
    favorites.classList.add('favorites')

    favorites.innerHTML = `<h1>Favorite books: <span>${this.appState.favorites.length}</span><h1>`

    this.appState.favorites.map((book) => {
      favorites.append(new Card(book, this.appState).render())
    })

    this.app.append(favorites)
  }
}
