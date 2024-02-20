import onChange from 'on-change'
import { AbstractView } from '../../common/view.js'
import { Header } from '../../components/header/header.js'
import { Search } from '../../components/search/search.js'
import { CardList } from '../../components/cardList/cardList.js'
import { Loader } from '../../components/loader/loader.js'

export class MainView extends AbstractView {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  }

  constructor(appState) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.state = onChange(this.state, this.stateHook.bind(this))
    this.setTitle('Book search')
  }

  appStateHook(path) {
    if (path === 'favorites') {
      console.log(path)
    }
  }

  async stateHook(path) {
    if (path === 'searchQuery') {
      console.log(path)
      this.state.loading = true
      const data = await this.loadList(this.state)
      this.state.loading = false
      this.state.list = data.docs
      console.log(data)
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

    const res = await fetch(url + q + o)
    return res.json()
  }

  render() {
    const main = document.createElement('div')
    main.append(new Search(this.state).render())
    main.append(new CardList(this.appState, this.state).render())
    this.app.innerHTML = ''
    this.renderHeader()
    this.app.append(main)
  }

  renderHeader() {
    const header = new Header(this.appState).render()
    this.app.prepend(header)
  }
}
