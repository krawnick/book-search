import { AbstractView } from '../../common/view.js'

export class NotFound extends AbstractView {
  constructor() {
    super()
    this.setTitle('404 Not Found')
  }

  render() {
    const notFound = document.createElement('div')
    notFound.innerHTML = 'Page not found'
    this.app.innerHTML = ''
    this.app.append(notFound)
  }
}
