import './cardList.css'
import { DivComponent } from '../../common/div-component'
import { Loader } from '../loader/loader'
import { Card } from '../card/card'

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
    console.log('this.state.numFound', this.state.numFound)

    if (this.state.list.length > 0) {
      this.state.list.map(async (book) => {
        this.element.append(new Card(book).render())
      })
    }

    return this.element
  }
}
