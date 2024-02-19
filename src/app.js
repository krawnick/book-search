import { MainView } from './views/main/main.js'
import { NotFound } from './views/notFound/notFound.js'

class App {
  routes = [{ path: '', view: MainView }]

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this))
    this.route()
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy()
    }

    const findView = this.routes.find((r) => r.path === location.hash)
    const view = findView ? findView.view : NotFound

    this.currentView = new view().render()
  }
}

new App()
console.log(new App())
