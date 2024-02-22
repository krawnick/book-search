import { ArticleComponent } from '../../common/article-component'
import './card.css'

export class Card extends ArticleComponent {
  constructor(book, appState) {
    super()
    this.appState = appState
    this.book = book
    console.log('book', book)
  }

  addToFavorites() {
    this.element
      .querySelector('.card__button')
      .addEventListener('click', () => {
        this.appState.favorites.unshift(this.book.oclc)
        console.log(this.appState)
      })
  }

  render() {
    this.element.classList.add('card')
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
      <button class="card__button"><img src="../../../static/favorites-black.svg" alt='button icon'></button>
      </div>
      
      `
    this.addToFavorites()
    return this.element
  }
}
