class Character {
  #inventory = []
  #health = 100
  pickItem(item) {
    this.#inventory.push(item)
  }
  takeHit(damage) {
    this.#health -= damage
  }

  // saveCharacter() {
  //   localStorage.setItem('character', this)
  // }

  // loadCharacter() {
  //   localStorage.get('character')
  // }
}

class DataBase {
  save(item) {
    localStorage.setItem('character', this)
  }
  load(item) {
    localStorage.get('character')
  }
}
