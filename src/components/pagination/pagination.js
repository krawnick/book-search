import { DivComponent } from '../../common/div-component'
import './pagination.css'

export class Pagination extends DivComponent {
  constructor(state) {
    super()
    this.state = state
    this.totalPages = Math.ceil(state.numFound / 10)
    this.currentPage = this.state.offset / 10 + 1
  }

  #prevPage() {
    if (this.state.offset >= 10) {
      this.state.offset -= 10
      this.currentPage--
    }
  }
  #nextPage() {
    if (this.currentPage < this.totalPages) {
      this.state.offset += 10
      this.currentPage++
    }
  }

  render() {
    this.element.innerHTML = `
    <div class="pagination">
      <div class="pagination__buttons">
        <button class="pagination__prev">Prev</button>
        <button class="pagination__next">Next</button>
      </div>

      <div class="pagination__info">
        <p class="pagination__current">Current page: <span>${this.currentPage}</span></p>
        <p class="pagination__total">Total pages: <span>${this.totalPages}</span></p>

      </div>

    </div>
    `

    const prev = this.element.querySelector('.pagination__prev')
    const next = this.element.querySelector('.pagination__next')

    if (this.currentPage === this.totalPages) {
      next.setAttribute('disabled', 'disabled')
    }

    if (this.currentPage === 1) {
      prev.setAttribute('disabled', 'disabled')
    }

    prev.addEventListener('click', this.#prevPage.bind(this))
    next.addEventListener('click', this.#nextPage.bind(this))

    return this.element
  }
}
