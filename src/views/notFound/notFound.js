import { AbstractView } from '../../common/view.js'
import { Header } from '../../components/header/header.js'
import './notFound.css'

export class NotFound extends AbstractView {
  constructor(appState) {
    super()
    this.setTitle('404 Not Found')
    this.appState = appState
  }

  render() {
    this.app.innerHTML = ''
    this.app.prepend(new Header(this.appState).render())
    const notFound = document.createElement('div')
    notFound.classList.add('not_found')
    notFound.innerHTML = 'Page not found'
    this.app.append(notFound)
  }
}
