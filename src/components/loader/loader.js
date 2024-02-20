import { DivComponent } from '../../common/div-component'
import './loader.css'

export class Loader extends DivComponent {
  constructor() {
    super()
  }

  render() {
    this.element.classList.add('loader')
    this.element.innerHTML = `
    <div class="dot"></div>
    `
    return this.element
  }
}
