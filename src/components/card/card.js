import { ArticleComponent } from '../../common/article-component'
import './card.css'

export class Card extends ArticleComponent {
  constructor(book, appState) {
    super()
    this.appState = appState
    this.book = book
  }

  #addToFavorites() {
    this.appState.favorites.unshift(this.book)
  }

  #deleteFromFavorites() {
    this.appState.favorites = this.appState.favorites.filter(
      (book) => book.key !== this.book.key
    )
  }

  render() {
    this.element.classList.add('card')
    const isFavorites = this.appState.favorites.find(
      (book) => book.key === this.book.key
    )
    this.element.innerHTML = `
    
    <div class="card__image">
    ${
      this.book.cover_i
        ? `<img src="https://covers.openlibrary.org/b/id/${this.book.cover_i}-M.jpg" alt="Book image"/>`
        : '<div>image not found</div>'
    }
    </div>
    <div class="card__body">
    <p class="card__tag">${
      this.book.subject ? this.book.subject[0] : '(Tag not found)'
    }</p>
      <h4 class="card__title">${
        this.book.title ? this.book.title : '(Title not found)'
      }</h4>
      <p class="card__author">${
        this.book.author_name ? this.book.author_name : '(Author not found)'
      }</p>
      <button class="card__button ${
        isFavorites ? 'active' : ''
      }"><img src="../../../static/favorites-black.svg" alt='button icon'></button>
      </div>
      
      `

    if (isFavorites) {
      this.element
        .querySelector('button')
        .addEventListener('click', this.#deleteFromFavorites.bind(this))
    } else {
      this.element
        .querySelector('button')
        .addEventListener('click', this.#addToFavorites.bind(this))
    }

    return this.element
  }
}
