import { DivComponent } from '../../common/div-component'
import './search.css'

export class Search extends DivComponent {
  constructor(state) {
    super()
    this.state = state
  }

  render() {
    this.element.classList.add('search')
    this.element.innerHTML = `
    <div class="search__wrapper">
      <input 
      class="search__input"
      type="text" 
      placeholder="Find a book or author..." 
      value="${this.state.searchQuery ? this.state.searchQuery : ''}" 
      />
      <img src="../../../static/search.svg" alt="search"/>
    </div>
    <button class="search__button" aria-label="search">
      <img src="../../../static/search-black.svg" alt="search"/>
    </button>
    `
    console.log('search', this.element)
    return this.element
  }
}
