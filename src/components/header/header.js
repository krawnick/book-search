import { DivComponent } from '../../common/div-component'
import './header.css'

export class Header extends DivComponent {
  constructor(appState) {
    super()
    this.appState = appState
  }

  render() {
    this.element.classList.add('header')
    this.element.innerHTML = `
    <div>
      <img src="/static/logo.svg" alt="Logo" />
    </div>
    <div class="menu">
      <a class="menu__item" href="#">
        <img src="/static/search.svg" alt="Search" />
        Book search
      </a>
      <a class="menu__item" href="#">
        <img src="/static/favorites.svg" alt="Favorites" />
        Favorites
        <div class="menu__counter">${this.appState.favorites.length}</div>
      </a>
    </div>
    `
    console.log('header', this.element)
    return this.element
  }
}
