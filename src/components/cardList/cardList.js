import './cardList.css'
import { DivComponent } from '../../common/div-component'
import { Loader } from '../loader/loader'

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
    <h1>Books found: <span>${this.state.list.length}</span></h1>
      `
    return this.element
  }
}
