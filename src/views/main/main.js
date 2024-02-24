import onChange from 'on-change'
import { AbstractView } from '../../common/view.js'
import { Header } from '../../components/header/header.js'
import { Search } from '../../components/search/search.js'
import { CardList } from '../../components/cardList/cardList.js'

export class MainView extends AbstractView {
  state = {
    error: null,
    list: [],
    loading: false,
    offset: 0,
    numFound: 0,
    searchQuery: undefined,
  }

  constructor(appState) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.state = onChange(this.state, this.stateHook.bind(this))
    this.setTitle('Book search')
  }

  destroy() {
    onChange.unsubscribe(this.appState)
    onChange.unsubscribe(this.state)
  }

  appStateHook(path) {
    if (path === 'favorites') {
      console.log('favorites')
      this.render()
    }
  }

  async stateHook(path) {
    if (path === 'searchQuery') {
      this.state.loading = true
      const data = await this.loadList(this.state)
      this.state.list = data.docs
      this.state.numFound = data.numFound
      this.state.loading = false
    }

    if (path === 'list') {
      this.render()
    }

    if (path === 'loading') {
      this.render()
    }
  }

  async loadList({ searchQuery, offset }) {
    const url = 'https://openlibrary.org/search.json'
    const q = `?q=${searchQuery}`
    const o = `&offset=${offset}`

    if (q) {
      const res = await fetch(url + q + o)
      return res.json()
    }
  }

  render() {
    this.app.innerHTML = ''
    this.renderHeader()
    const main = document.createElement('div')
    main.append(new Search(this.state).render())
    main.append(new CardList(this.appState, this.state).render())
    this.app.append(main)
  }

  renderHeader() {
    const header = new Header(this.appState).render()
    this.app.prepend(header)
  }
}
