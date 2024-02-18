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
    const view = this.routes.find((r) => r.path === location.hash).view

    if (!this.view) {
      NotFound().render()
    }
    this.currentView = new view()
    console.log('this.currentView', this.currentView)
    this.currentView.render()
  }
}

new App()
