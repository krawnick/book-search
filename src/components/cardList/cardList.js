import './cardList.css'
import { DivComponent } from '../../common/div-component'
import { Loader } from '../loader/loader'
import { Card } from '../card/card'
import { Pagination } from '../pagination/pagination'

export class CardList extends DivComponent {
  constructor(appState, state) {
    super()
    this.appState = appState
    this.state = state
  }

  render() {
    this.element.classList.add('card_list')
    if (this.state.loading) {
      this.element.append(new Loader().render())
      return this.element
    }
    this.element.innerHTML = `
    <h1>Books found: <span>${this.state.numFound}</span></h1>
      `

    if (this.state.list.length > 0) {
      for (let i = 0; i < 10; i++) {
        this.state.list[i]
          ? this.element.append(
              new Card(this.state.list[i], this.appState).render()
            )
          : null
      }
    }

    if (this.state.numFound > 10) {
      this.element.append(new Pagination(this.state).render())
    }

    return this.element
  }
}
